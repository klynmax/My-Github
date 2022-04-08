import React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

const styles = {
  paper: {
    borderRadius: '100%',
    overflow: 'hidden',
    height: 400,
    width: 400,
    // background: '#eaeef2',
    background: '#fafafa',
    textAlign: 'center'
  },
  icon: {
    height: 120,
    width: 120,
    marginTop: 10,
    // color: '#42a5f5',
    color: '#ffb74d',
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  }
}

export default function Empty(props) {

  const { title, text } = props;

  return (
    <div>
      <Paper sx={styles.paper} >
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ReportOutlinedIcon sx={styles.icon} />
            <div style={{marginTop: 40}}>
                <Typography sx={{marginTop: 0}}><b>{title}</b></Typography>
                <Typography><i>{text}</i></Typography>
            </div>
          </Grid>
        </Grid> 
      </Paper>
    </div>
  );
}
