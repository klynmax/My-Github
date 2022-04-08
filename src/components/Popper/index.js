import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { VscRepoClone } from "react-icons/vsc";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import classes from "./style.module.css";
import CopyText from "../CopyText";
import AlertSuccess from '../AlertSuccess';
import { BorderColor } from "@mui/icons-material";

export default function SimplePopper(props) {
    

  const {value} = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Button 
        variant="outlined" 
        aria-describedby={id} 
        type="button" 
        startIcon={<VscRepoClone />}
        // endIcon={<ArrowDropDownOutlinedIcon />}
        onClick={handleClick}
      >
        Clone
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <div className={classes.balao2} >
            <Box m={1}>
                <Box display="flex">
                    {/* <VscRepoClone style={{width: 18, height: 18}} /> */}
                    <Typography sx={{fontSize: 11}}> &nbsp; &nbsp; <b>HTTPS:</b> </Typography>
                    <CopyText data={value} />
                </Box>
             {/* <CopyText data={value} /> */}
            </Box>
            <AlertSuccess />
        </div>
      </Popper>
    </div>
  );
}
