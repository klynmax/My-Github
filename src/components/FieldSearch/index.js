import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';

import Context from '../../Context/Context';
import AlertSuccess from '../AlertSuccess';
import AlertErro from '../AlertErro';

export default function InputAdornments(props) {

  const { setData, setRepositoryData } = React.useContext(Context);
  const {placeholder} = props;
  const location = useLocation()

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

  async function saveUser(){
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
        setData(JSON.parse(localStorage.getItem('repository')).reverse())
      }
      setSuccess(true)
    } else {
      setErro(true)
    }
    setValues({weight: ''});
  }

  async function saveRepository(){
    const result = await fetch(`https://api.github.com/repos/${values.weight}`,
      {
        method: 'GET',
      }
    );
    const res = await result.json()
    if(result.ok){
      if (localStorage.getItem('myRepository') === '' || localStorage.getItem('repository') === null) {
        localStorage.setItem('myRepository', JSON.stringify([res]));
      } 
      else {
        localStorage.setItem('myRepository',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('myRepository')),
            res
          ])
        )
        setRepositoryData(JSON.parse(localStorage.getItem('myRepository')).reverse())
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
          {
            location.pathname === "/Repository" && (
              <Box display="flex">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange('weight')}
                  // endAdornment={
                  //   <>
                  //   <Divider orientation="vertical" flexItem />
                  //   <AddOutlinedIcon 
                  //     onClick={saveRepository} 
                  //     sx={{
                  //       cursor: 'pointer',
                  //       marginLeft: '5%'
                  //     }}
                  //   />
                  //   </>
                  // }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  placeholder={placeholder}
                  sx={{
                    height: 32,
                    width: 380
                  }}
                />
                <Button
                  variant="contained" 
                  sx={{
                    marginLeft: 2, 
                    height: 32,
                    fontSize: 12
                  }}
                    onClick={saveRepository} 
                  >
                    Cadastrar
                </Button>
              </Box>
            )
          }
          {
            location.pathname === "/Users" && (
              <Box display="flex">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange('weight')}
                  // endAdornment={
                  //     <SearchIcon 
                  //         onClick={saveUser} 
                  //         sx={{
                  //           cursor: 'pointer',
                  //         }}
                  //     />
                  // }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  placeholder={placeholder}
                  sx={{
                    height: 32,
                    width: 380
                  }}
                />
                <Button
                  variant="contained" 
                  sx={{
                    marginLeft: 2, 
                    height: 32,
                    fontSize: 12
                  }}
                  onClick={saveUser} 
                >
                  Cadastrar
                </Button>
              </Box>
            )
          }
        </FormControl>
      </div>

      {
        location.pathname === "/Repository" && (
          <>
            <AlertSuccess 
              openAlert={success}
              closeAlert={handleClose}
              text={"Repositório cadastrado com sussesso!"}
            />
            <AlertErro 
              openAlertErro={erro}
              closeAlertErro={handleClose}
              textErro={"Repositório não encontrado!"}
            />
          </>
        )
      }
      {
        location.pathname === "/Users" && (
          <>
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
          </>
        )
      }

      {/* <AlertSuccess 
        openAlert={success}
        closeAlert={handleClose}
        text={"Usuário(a) cadastrado com sussesso!"}
      /> */}

      {/* <AlertErro 
        openAlertErro={erro}
        closeAlertErro={handleClose}
        textErro={"Usuário(a) não encontrado!"}
      /> */}
    </Box>
  );
}
