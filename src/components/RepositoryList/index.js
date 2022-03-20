import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import Poper from '../Popper';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

// const rows = [
//   {
//     name: "-Integrando-um-Backend-em-Node.js-com-um-Frontend-em-React-para-um-E-commerce",
//     html_url: "https://github.com/jefflovis/-Integrando-um-Backend-em-Node.js-com-um-Frontend-em-React-para-um-E-commerce",
//     full_name: "jefflovis/-Integrando-um-Backend-em-Node.js-com-um-Frontend-em-React-para-um-E-commerce",
//     language: "HTML",
//     created_at: "01/01/2022"
//   },
//   {
//     name: "Boilerplate-React",
//     html_url: "https://github.com/jefflovis/-Integrando-um-Backend-em-Node.js-com-um-Frontend-em-React-para-um-E-commerce",
//     full_name: "klynmax/Boilerplate-React",
//     language: "Java",
//     created_at: "01/01/2022"
//   }
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function UnstyledTable(props) {

  const { rows } = props
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root sx={{ maxWidth: '400px' }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome Completo</th>
            <th>Linguagem</th>
            <th>Data criação</th>
            <th>Copiar</th>
          </tr>
        </thead>
        <tbody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
            <tr >
              <td>{row.name}</td>
              <td style={{ width: 12 }} align="right">
                {row.full_name}
              </td>
              <td style={{ width: 120 }} align="right">
                {row.language}
              </td>
              <td style={{ width: 120 }} align="right">
                {row.created_at}
              </td>
              <td style={{ width: 120 }} align="right">
                <Poper value={row.full_name} />
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
      </table>
    </Root>
  );
}
