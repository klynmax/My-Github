import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { FiUserPlus, FiUserCheck, FiTrash } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import Context from '../../Context/Context';
import Dialog from '../../components/Dialog';
import AlertSuccess from '../AlertSuccess';
import DrawerRigth from '../DrawerRigth';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const styles = {
   link: {
    cursor: 'pointer',
   },
   icons: {
     width: 20,
     height: 20,
     // color: '#FFD700'
   },
   iconGreen: {
    width: 20,
    height: 20,
    color: '#008000'
   },
   iconOrange: {
    width: 20,
    height: 20,
    color: '#FF8C00'
   },
   iconsFooter: {
    width: 20,
    height: 20,
    color: '#000000'
   },
   favorite: {
    width: 20,
    height: 20,
    color: '#FF0000'
   }
};

export default function RecipeReviewCard(props) {

  const {dataCard, click} = props

  const [expanded, setExpanded] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userData, setUserData] = React.useState([])
  const [openDrawer, setOpenDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const [id, setId] = React.useState('');

  const { setData } = useContext(Context);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const modal = (id) => {
    setId(id);
    setOpenModal(true)
  }

  const deleteById = (id) => {
    const repositories = dataCard.filter((item) => item.id !== id);
    localStorage.setItem('repository', JSON.stringify(repositories));
    setData(repositories)
    setOpenModal(false)
    setSuccess(true)
  }

  const handleClose = (event, reason) => {
    setSuccess(false);
  };

  const redirect = (url) => {
    window.location.href = url
  }

  const toggleDrawer = (anchor, open, data) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer({ ...openDrawer, [anchor]: open });
    setUserData(data)
  };
  
  const handleLike= (id) => {
    const like = dataCard.map(repo => {
      return repo.id === id ? { ...repo, favorite: true } : repo
    })
    localStorage.setItem('repository', JSON.stringify(like));
    setData(like)
  }

  const handleDeslike = (id) => {
    const deslike = dataCard.map(repo => {
      return repo.id === id ? { ...repo, favorite: false } : repo
    })
    localStorage.setItem('repository', JSON.stringify(deslike));
    setData(deslike)
  }

  return (
    <Grid container>
      <Grid item lg={12} >
        <Box 
          display="flex"
          flexWrap="wrap"
        >
          { dataCard && dataCard.map((item, index) => (
            <Box key={index} mx={1.1} sx={{ width: 365, marginTop: 5 }}>
              <Card >
                <CardHeader
                  avatar={
                    <Avatar 
                      onClick={() => redirect(item.html_url)}
                      sx={{ bgcolor: red[500], width: 60, height: 60, cursor: 'pointer' }} 
                      aria-label="recipe"
                    >
                      <CardMedia
                        component="img"
                        image={item.avatar_url}
                        alt="Paella dish"
                        sx={{borderRadius: '100%', width: 100}}
                      />
                    </Avatar>
                  }
                  sx={{fontSize: 100}}
                  title={
                    <b 
                      onClick={() => redirect(item.html_url)} 
                      style={styles.link}
                    >
                      {item.name}
                    </b>
                  }
                  subheader={
                    <i
                      onClick={() => redirect(item.html_url)} 
                      style={styles.link}
                    >
                      {item.login}
                      </i>}
                />
                
                <CardContent sx={{backgroundColor: '#eaeef2', borderRadius: 1}}>
                  <Box display="flex">
                    <Grid item lg={2} >
                      <GoRepo style={styles.icons} />
                    </Grid>
                    <Grid item>
                      <Typography sx={{whiteSpace: 'nowrap'}}>Repositórios Publicos:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.public_repos}</b></Typography>
                    </Grid>
                    {/* </Grid> */}
                  </Box>
                  <Box display="flex">
                    <Grid item lg={2}>
                      <FiUserPlus style={styles.iconGreen} />
                    </Grid>
                    <Grid item>
                      <Typography>Seguidores:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{fontSize: 18}}><b>&nbsp;&nbsp;{item.followers}</b></Typography>
                    </Grid>
                  </Box>

                  <Box display="flex">
                    <Grid item lg={2}>
                    <FiUserCheck style={styles.iconOrange} />
                    </Grid>
                    <Grid item>
                      <Typography>Seguindo:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.following}</b></Typography>
                    </Grid>
                  </Box>
                </CardContent>
                    
                <Divider />

                <CardActions disableSpacing sx={{ backgroundColor: '#fff', height: 40}}>
                  <IconButton aria-label="add to favorites" >
                    {
                      item.favorite === true ? (
                        <ThumbUpIcon sx={styles.favorite} onClick={() => handleDeslike(item.id)} />
                      )
                      :
                      (
                        <ThumbUpIcon sx={styles.iconsFooter} onClick={() => handleLike(item.id)} />
                      )
                    }
                  </IconButton>
                  <IconButton aria-label="share" onClick={() => modal(item.id)}>
                    <FiTrash style={styles.iconsFooter} />
                  </IconButton>
                  
                  <ExpandMore
                    expand={expanded}
                    onClick={toggleDrawer('right', true, item)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    {/* <AddIcon />  */}
                    <Typography sx={{fontSize: 12, color: "#42a5f5"}}>Ver detalhes</Typography>
                  </ExpandMore>
                </CardActions>
                </Card>
            </Box>
            
            ))
          }
        </Box>
        <Dialog  
          open={openModal}  
          close={() => setOpenModal(false)} 
          remove={() => deleteById(id)}
        />
        <AlertSuccess 
          openAlert={success}
          closeAlert={handleClose}
          text={"Usuário(a) removido com sussesso!"}
        />
        <DrawerRigth 
          openDrawer={openDrawer}
          closeDrawer={toggleDrawer('right', false)}
          userData={userData}
        />
      </Grid>
    </Grid>
  );
}
