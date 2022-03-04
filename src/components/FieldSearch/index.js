import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

export default function InputAdornments() {

  const [values, setValues] = React.useState({
    weight: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const headers = new Headers({
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // });

  const [success, setSuccess] = React.useState(false)
  const [erro, setErro] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErro(false);
    setSuccess(false);
  };

  async function save(){
    const result = await fetch(`https://api.github.com/users/${values.weight}`,
      {
        method: 'GET',
      }
    );
    const res = await result.json()
    console.log(result)
    if(result.ok){
      if (localStorage.getItem('repository') === '' || localStorage.getItem('repository') === null) {
        localStorage.setItem('repository', JSON.stringify([res]));
      } 
      else {
        localStorage.setItem('repository',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('repository')),
            res
          ])
        )
        console.log('cai aqui', JSON.parse(localStorage.getItem('repository')))
      }
    } else {
      setErro(true)
    }
    setSuccess(true)
  }



  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl /*sx={{ m: 1, width: '60ch' }}*/ variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={
                <SearchIcon 
                    onClick={
                        // () => console.log('click')
                        //handleChange('weight')
                        save
                    } 
                    sx={{
                      cursor: 'pointer',
                    }}
                />
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder="Pesquisar"
            sx={{
              height: 32,
              width: 380
            }}
          />
        </FormControl>
      </div>

          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={erro} autoHideDuration={6000} onClose={handleClose}>
            <Alert 
              onClose={handleClose} 
              severity="error" 
              sx={{ 
                width: '100%',
                marginTop: 6
              }}
            >
              Usuário(a) não encontrado!
            </Alert>
          </Snackbar>

          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={success} autoHideDuration={6000} onClose={handleClose}>
            <Alert 
              onClose={handleClose} 
              severity="success" 
              sx={{ 
                width: '100%',
                marginTop: 6
              }}
            >
              Usuário cadastrado com sussesso!
            </Alert>
          </Snackbar>
    </Box>
  );
}
