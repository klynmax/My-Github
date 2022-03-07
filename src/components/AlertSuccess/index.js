import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function AlertSuccess(props) {

    const {openAlert, closeAlert, text} = props
    
    return(
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openAlert} autoHideDuration={4000} onClose={closeAlert}>
            <Alert 
              onClose={closeAlert} 
              severity="success" 
              sx={{ 
                width: '100%',
                marginTop: 7
              }}
            >
              {text}
            </Alert>
          </Snackbar>
    )
}