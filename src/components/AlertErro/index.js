import React from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function AlertErro(props) {

    const {openAlertErro, closeAlertErro, textErro} = props

    return(
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openAlertErro} autoHideDuration={4000} onClose={closeAlertErro}>
            <Alert 
              onClose={closeAlertErro} 
              severity="error" 
              sx={{ 
                width: '100%',
                marginTop: 7
              }}
            >
              {textErro}
            </Alert>
          </Snackbar>
    )
}