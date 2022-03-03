import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const data = [
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  },
  {
    nome: 'Klynsman guedes',
    repositorios: 10,
    seguidores: 2,
    seguindo: 2
  }
]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{width: 300}}><b>Nome do usuário</b></TableCell>
              <TableCell align="center" ><b>Repositório Publicos</b></TableCell>
              <TableCell align="center" ><b>Seguidores</b></TableCell>
              <TableCell align="center" ><b>Seguindo</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell >{row.nome}</TableCell>
                    <TableCell align="center" >{row.repositorios}</TableCell>
                    <TableCell align="center" >{row.seguidores}</TableCell>
                    <TableCell align="center" >{row.seguindo}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
