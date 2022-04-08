import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function AlertDialog(props) {

  const {open, close, remove} = props
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" m={3}>
            <ReportProblemIcon 
              sx={{
                height: 50,
                width: 50,
                color: 'yellow'
              }} 
            />
          </Box>

          <Typography
            sx={{
              fontSize: 20
            }}
          >
              <b>Deseja realmente excluir este repositorio da sua lista?</b>
          </Typography>
      

          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={remove} autoFocus>
              Remover
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}
