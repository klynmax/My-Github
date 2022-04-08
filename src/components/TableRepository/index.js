import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FiTrash } from "react-icons/fi";

import Poper from '../Popper';
import Dialog from '../Dialog';
import Context from '../../Context/Context';
import AlertSuccess from '../AlertSuccess';

const style = {
  root: {
    backgroundColor: "#eaeef2"
  }
}

export default function StickyHeadTable(props) {
  const {rows} = props
  const { setRepositoryData } = React.useContext(Context);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openModal, setOpenModal] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [id, setId] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const modal = (id) => {
    setId(id);
    setOpenModal(true)
  }

  const deleteById = () => {
    const repositories = rows.filter(item =>  item.id !== id);
    localStorage.setItem('myRepository', JSON.stringify(repositories));
    setRepositoryData(repositories)
    setOpenModal(false)
    setSuccess(true)
  }

  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "red" }}>
              <TableCell sx={style.root}><b></b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Nome usuário</b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Repositorio</b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Linguagem</b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Criação</b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Clone</b></TableCell>
              <TableCell align="center" sx={style.root} ><b>Excluir</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align="center" >
                      <Avatar alt="Remy Sharp" src={row.owner.avatar_url} />
                    </TableCell>
                    <TableCell align="center" >{row.owner.login}</TableCell>
                    <TableCell align="center" >{row.name}</TableCell>
                    <TableCell align="center" >{row.language}</TableCell>
                    <TableCell align="center" >{row.created_at}</TableCell>
                    <TableCell align="center" >
                        <Poper value={row.clone_url} />
                    </TableCell>
                    <TableCell align="center" >
                    <IconButton aria-label="share" onClick={() => modal(row.id)} >
                      <FiTrash style={{color: "red"}} />
                    </IconButton>
                    
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={"Linhas por páginas"}
        labelDisplayedRows={({ from, to, count }) => `Exibindo linhas ${from}-${to} do total de ${count}`}
      />

      <Dialog  
        open={openModal}  
        close={() => setOpenModal(false)} 
        remove={() => deleteById()}
      />

      <AlertSuccess 
        openAlert={success}
        closeAlert={handleClose}
        text={"Repositorio removido com sussesso!"}
      />
    </Paper>
  );
}
