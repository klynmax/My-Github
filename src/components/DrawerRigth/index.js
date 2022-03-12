/* eslint-disable react-hooks/exhaustive-deps */
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

import { DiJava, DiJsBadge, DiPython, DiPhp, DiRuby } from "react-icons/di";
import { SiTypescript, SiCsswizardry } from "react-icons/si";
import { AiFillHtml5, AiOutlineFrown } from "react-icons/ai";
import { BsFillEmojiFrownFill } from "react-icons/bs";


const style = {
  title: { fontSize: 18 },
  subtitle: {
    fontSize: 16,
    marginTop: 1
  },
  font:{
    fontSize: 13
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
    maxHeight: 240,
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
  },
  icon:{
    width: 30, 
    height: 30
  },
  box: {
    backgroundColor: "#F0F8FF",
    borderRadius: 4
  }
}


export default function SwipeableTemporaryDrawer(props) {

  const {openDrawer, closeDrawer, userData} = props

  const [followers, setFollowers] = React.useState([]);
  const [repository, setRepository] = React.useState([]);
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

  React.useEffect(async () => {
    const result = await fetch(`${userData.repos_url}`,
    {
      method: 'GET',
    }
    );
    if(result.ok){
      setRepository(await result.json([]))
    }
  },[userData])

  React.useEffect(async () => {
    const result = await fetch(`${userData.followers_url}`,
    {
      method: 'GET',
    }
    );
    if(result.ok){
      setFollowers(await result.json([]))
    }
  },[userData])

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" m={3}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={style.avatar} alt="Remy Sharp" src={userData && userData.avatar_url} />
          <Grid item>
            <Typography sx={style.title} ><b>{userData && userData.name}</b></Typography>
            <Typography sx={style.font} >{userData && userData.login}</Typography>
          </Grid>
        </Stack>
      </Box>

      <Divider />

      <Box display="flex" m={3}>
        <Grid container >
          <Typography sx={style.title} ><b>Repositorios publicos</b></Typography>
            <Grid  item xl={12} lg={12}>
              <DialogContent sx={style.dialog}>
                <DialogContentText
                  id="scroll-dialog-description"
                  // ref={descriptionElementRef}
                  tabIndex={-1}
                  //sx={{maxHeight: 100}}
                >
                  {
                    repository && repository.map((item, index) => (
                      <Box display="flex" m={1} style={style.box} >
                        <Box display="flex" m={3} sx={{ flexGrow: 1 }}>
                          <Grid item sx={{ flexGrow: 1 }}>
                            <Typography sx={style.titleListRepo} >{item.name}</Typography>
                            <Typography sx={style.font} >{item.full_name}</Typography>
                            <Typography sx={style.font} >Data de Criação: 01/02/2022</Typography>
                            {
                              item.language == 'Java' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <DiJava style={style.icon} />
                                  <Typography sx={style.subtitle} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'JavaScript' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <DiJsBadge style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'Python' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <DiPython style={{height: 25, width: 25}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'PHP' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <DiPhp style={{height: 25, width: 25}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'TypeScript' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <SiTypescript style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'Ruby' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <DiRuby style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'HTML' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <AiFillHtml5 style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == 'CSS' && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <SiCsswizardry style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >{item.language}</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language == null && (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <AiOutlineFrown style={{height: 20, width: 20}} />
                                  <Typography sx={{fontSize: 16, marginLeft: 1}} >Linguagem não definida</Typography>
                                </Box>
                              )
                            }
                            {
                              item.language !== 'CSS' && item.language !== 'HTML' && item.language !== 'Ruby' &&
                              item.language !== 'TypeScript' &&  item.language !== 'PHP' && item.language !== 'Python' &&
                              item.language !== 'JavaScript' &&  item.language !== 'Java' ? (
                                <Box display="flex" sx={{marginTop: 5}}>
                                  <Typography sx={{fontSize: 16}} >{item.language}</Typography>
                                </Box>
                              )
                              :
                              ('')
                            }
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
                      </Box>
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
          <Typography sx={style.title} ><b>Seguidores</b></Typography>
            <Grid item xl={12} lg={12}>
              <DialogContent sx={style.dialog}>
                <DialogContentText
                  id="scroll-dialog-description"
                  // ref={descriptionElementRef}
                  tabIndex={-1}
                  //sx={{maxHeight: 100}}
                >
                  {
                    followers && (followers?.map((item, index) => (
                      <div style={{width: "100%"}}>
                        <Box display="flex" m={2}>
                          <Stack direction="row" spacing={4} sx={{ flexGrow: 1 }}>
                            <Avatar sx={{width: 40, height: 40}} alt="Remy Sharp" src={item && item.avatar_url}/>
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
                                  Visualizar
                              </Button>
                            </Grid>
                        </Box>
                        {/* <Divider /> */}
                      </div>
                    )))
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
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={'right'}
            open={openDrawer[anchor]}
            onClose={closeDrawer}
            // onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
