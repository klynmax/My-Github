import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import { Grid } from '@mui/material';

import Logo from '../../assets/image/GitHub-Logo.png';

import {
  Link,
} from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ 
            width: `calc(100% - ${drawerWidth}px)`, 
            ml: `${drawerWidth}px`,
            backgroundColor: '#24292f',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // backgroundColor: '#24292f',
            backgroundColor: '#eaeef2'
          },
          '& .MuiDrawer-paperAnchorDockedLeft': {
            borderRight: '0px',
          },
          '& .MuiPaper-elevation0': {
            boxShadow: '3px 3px 8px #00000008',
            opacity: 1,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/* <Divider /> */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
        >
          <img 
            src={Logo} 
            alt="Logo"
            style={{
              width: 200,
              height: 100,
              alignItems: 'center'
            }}
            />
        </Grid>

        <List>
          <Link to="/Dashboard">
          <ListItem button>
            <MailIcon />
            <Typography>Dashboard</Typography>
          </ListItem>
          </Link>
        </List>

        <List>
          <Link to="/Teste">
          <ListItem button>
            <MailIcon />
            <Typography>Teste</Typography>
          </ListItem>
          </Link>
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ 
            flexGrow: 1, 
            bgcolor: 'background.default',
            p: 3,
            //padding: theme.spacing(3),
            // backgroundColor: '#1e2127',
            minHeight: '100vh',
            overflow: 'auto', 
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}