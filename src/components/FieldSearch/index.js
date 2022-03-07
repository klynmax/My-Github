import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import Context from '../../Context/Context';
import AlertSuccess from '../AlertSuccess';
import AlertErro from '../AlertErro';

export default function InputAdornments() {

  const { setData } = React.useContext(Context);

  const [values, setValues] = React.useState({
    weight: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
        setData(JSON.parse(localStorage.getItem('repository')))
      }
      setSuccess(true)
    } else {
      setErro(true)
    }
    setValues({weight: ''});
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={
                <SearchIcon 
                    onClick={save} 
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

      <AlertSuccess 
        openAlert={success}
        closeAlert={handleClose}
        text={"Usuário(a) cadastrado com sussesso!"}
      />

      <AlertErro 
        openAlertErro={erro}
        closeAlertErro={handleClose}
        textErro={"Usuário(a) não encontrado!"}
      />
    </Box>
  );
}
