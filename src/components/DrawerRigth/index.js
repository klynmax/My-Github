import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const style = {
  title: { fontSize: 18 },
  subtitle: {
    fontSize: 12
  },
  avatar: {
    width: 60, 
    height: 60
  },
  titleListRepo: {
    fontSize: 18,
    color: '#42a5f5'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'scale(1.9)',
    color: 'red',
  },
  dialog: {
    maxHeight: 200,
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#42a5f5',
      borderRadius: '6px',
      //outline: '1px solid slategrey',
    },
  }
}

const data = [
  {
    "login": "fehaa",
    "id": 5955068,
    "node_id": "MDQ6VXNlcjU5NTUwNjg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5955068?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/fehaa",
    "html_url": "https://github.com/fehaa",
  },
  {
    "login": "jefflovis",
    "id": 78802209,
    "node_id": "MDQ6VXNlcjc4ODAyMjA5",
    "avatar_url": "https://avatars.githubusercontent.com/u/78802209?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jefflovis",
    "html_url": "https://github.com/jefflovis",
  },
  {
    "login": "jasineri",
    "id": 17604010,
    "node_id": "MDQ6VXNlcjE3NjA0MDEw",
    "avatar_url": "https://avatars.githubusercontent.com/u/17604010?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jasineri",
    "html_url": "https://github.com/jasineri",
  }
]

const repo = [
  {
    "name": "Boilerplate-React",
    "full_name": "klynmax/Boilerplate-React",
    "html_url": "https://github.com/klynmax/Boilerplate-React",
    "created_at": "2022-02-11T01:27:52Z",
    "clone_url": "https://github.com/klynmax/Boilerplate-React.git",
    "language": "HTML",
  },
  {
    "name": "Calculo-IMC-App",
    "full_name": "klynmax/Calculo-IMC-App",
    "html_url": "https://github.com/klynmax/Calculo-IMC-App",
    "created_at": "2021-11-01T17:24:39Z",
    "clone_url": "https://github.com/klynmax/Calculo-IMC-App.git",
    "language": "JavaScript",
  },
  {
    "name": "CursoInicianteReact",
    "full_name": "klynmax/CursoInicianteReact",
    "html_url": "https://github.com/klynmax/CursoInicianteReact",
    "created_at": "2020-12-29T15:24:33Z",
    "clone_url": "https://github.com/klynmax/CursoInicianteReact.git",
    "language": "JavaScript",
  }
]

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const redirect = (url) => {
    window.location.href = url
  }

  const bullRGB = <span style={style.bullet}>•</span>;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" m={3}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={style.avatar} alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/52705719?v=4" />
          <Grid item>
            <Typography sx={style.title} ><b>Klynsman Lemos</b></Typography>
            <Typography sx={style.subtitle} >Klynmax</Typography>
          </Grid>
        </Stack>
      </Box>

      <Divider />

      <Box display="flex" m={3}>
        <Grid container >
          <Typography sx={style.title} ><b>Meus repositorios publicos</b></Typography>
            <Grid item xl={12} lg={12}>
              <DialogContent sx={style.dialog}>
                <DialogContentText
                  id="scroll-dialog-description"
                  // ref={descriptionElementRef}
                  tabIndex={-1}
                  //sx={{maxHeight: 100}}
                >
                  {
                    repo.map((item, index) => (
                      <div style={{width: "100%"}}>
                        <Box display="flex" m={2} >
                          <Grid item lg={2} >
                            <BookOutlinedIcon />
                          </Grid>
                          <Grid item sx={{ flexGrow: 1 }}>
                            <Typography sx={style.titleListRepo} >{item.name}</Typography>
                            <Typography /*sx={style.subtitle}*/ >{item.full_name}</Typography>
                            <Typography /*sx={style.subtitle}*/ >Data de Criação: 01/02/2022</Typography>
                            <Typography /*sx={style.subtitle}*/ > {bullRGB}{item.language}</Typography>
                          </Grid>
                      
                          <Grid item lg={3} >
                              <Button 
                                variant="outlined"
                                size="small"
                                onClick={() => redirect(item.html_url)}
                                startIcon={<BookOutlinedIcon />}
                                sx={{width: 120}}
                              >
                                  Acessar 
                              </Button>
                            </Grid>
                            
                        </Box>
                        <Divider />
                      </div>
                    ))
                  }
                </DialogContentText>
              </DialogContent>
            </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box display="flex" m={3}>
        <Grid container >
          <Typography sx={style.title} ><b>Meus seguidores</b></Typography>
            <Grid item xl={12} lg={12}>
              <DialogContent sx={style.dialog}>
                <DialogContentText
                  id="scroll-dialog-description"
                  // ref={descriptionElementRef}
                  tabIndex={-1}
                  //sx={{maxHeight: 100}}
                >
                  {
                    data.map((item, index) => (
                      <div style={{width: "100%"}}>
                        <Box display="flex" m={2}>
                          <Stack direction="row" spacing={4} sx={{ flexGrow: 1 }}>
                            <Avatar sx={{width: 40, height: 40}} alt="Remy Sharp" src={item.avatar_url}/>
                            <Grid item>
                              <Typography sx={style.title} >{item.login}</Typography>
                            </Grid>
                          </Stack>
                          <Grid item lg={3}>
                              <Button 
                                variant="outlined"
                                size="small"
                                onClick={() => redirect(item.html_url)}
                                startIcon={<PersonOutlinedIcon />}
                                sx={{width: 120}}
                              >
                                  Ver perfil
                              </Button>
                            </Grid>
                        </Box>
                        <Divider />
                      </div>
                    ))
                  }
                </DialogContentText>
              </DialogContent>
            </Grid>
        </Grid>
      </Box>
      
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
