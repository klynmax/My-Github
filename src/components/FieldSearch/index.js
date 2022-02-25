import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    weight: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  console.log('teste', values)

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
                        handleChange('weight')
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
              width: 500
            }}
          />
        </FormControl>
      </div>

    </Box>
  );
}
