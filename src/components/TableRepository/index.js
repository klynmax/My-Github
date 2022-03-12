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
import Stack from '@mui/material/Stack';

import Poper from '../Popper';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    "name": "Boilerplate-React",
    "owner": {
      "login": "klynmax",
      "avatar_url": "https://avatars.githubusercontent.com/u/52705719?v=4",
      "url": "https://api.github.com/users/klynmax",
      "html_url": "https://github.com/klynmax",
      "repos_url": "https://api.github.com/users/klynmax/repos",
      },
    "html_url": "https://github.com/klynmax/Boilerplate-React",
    "created_at": "2022-02-11T01:27:52Z",
    "clone_url": "https://github.com/klynmax/Boilerplate-React.git",
    "language": "HTML",
    "watchers": 1,
  },
  {
    "name": "aula_bootstrap",
    "owner": {
        "login": "jefflovis",
        "avatar_url": "https://avatars.githubusercontent.com/u/78802209?v=4",
        "url": "https://api.github.com/users/jefflovis",
        "html_url": "https://github.com/jefflovis",
        "repos_url": "https://api.github.com/users/jefflovis/repos",
    },
    "html_url": "https://github.com/jefflovis/aula_bootstrap",
    "created_at": "2021-12-14T00:54:35Z",
    "clone_url": "https://github.com/jefflovis/aula_bootstrap.git",
    "language": "JavaScript",
    "watchers": 0,
  }
];

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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell sx={{width: 0}}><b></b></TableCell>
              <TableCell align="center" ><b>Nome usuário</b></TableCell>
              <TableCell align="center" ><b>Repositorio</b></TableCell>
              <TableCell align="center" ><b>Linguagem</b></TableCell>
              <TableCell align="center" ><b>Criação</b></TableCell>
              <TableCell align="center" ><b>Clone Repositorio</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
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
      />
    </Paper>
  );
}
