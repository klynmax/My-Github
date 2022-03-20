import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { VscRepoClone } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

import FieldSearch from '../FieldSearch';

export default function AlertDialog() {
  
  const location = useLocation()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="contained" 
        onClick={handleClickOpen}
        startIcon={<VscRepoClone />}
    >
        Novo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cadastrar novo reposiório"}
        </DialogTitle>
        <DialogContent>
          {
            location.pathname === "/Repository" && (
                <FieldSearch placeholder="Ex: usuário/repositorio" />
            )
          }
          {/* <FieldSearch placeholder="A pesquisa" /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}