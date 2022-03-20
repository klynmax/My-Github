import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import Divider from "@mui/material/Divider";
import { VscCopy } from "react-icons/vsc";

import AlertSuccess from '../AlertSuccess';

export default function CopyText(props) {

  const {data} = props

  const [values, setValues] = React.useState({
    weight: "https://github.com/klynmax/Boilerplate-React.git"
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [success, setSuccess] = React.useState(false)


  function copy(text) {
    var copyText = document.getElementById("text")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    console.log(copyText.value)
    setSuccess(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: 300 }} variant="oupxtlined">
          <OutlinedInput
            id="text"
            value={data}
            // onChange={handleChange('weight')}
            sx={{ height: 32, fontSize: 10, backgroundColor: "#fff" }}
            endAdornment={
              <>
                <Divider orientation="vertical" flexItem />
                <VscCopy
                  style={{
                    cursor: "pointer",
                    marginLeft: '5%',
                    height: 25,
                    width: 25
                  }}
                  onClick={() => copy(data)}
                />
              </>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight"
            }}
          />
        </FormControl>

      </div>
      {/* <AlertSuccess 
            openAlert={success}
            closeAlert={handleClose}
            text={"Copiado!"}
            sx={{marginTop: 60}}
      /> */}
    </Box>
  );
}
