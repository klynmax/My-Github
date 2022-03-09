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
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

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
   }
};

export default function RecipeReviewCard(props) {

  const {data, click} = props

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

  const { setData } = useContext(Context);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteById = (id) => {
    const repositories = data.filter((item) => item.id !== id);
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



  return (
    <Grid container>
      <Grid item lg={12} >
        <Box 
          display="flex"
          flexWrap="wrap"
        >
          { data && data.map((item, index) => (
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
                
                {/* <Divider /> */}

                <CardContent>
                  <Box display="flex">
                    <Grid item lg={2} >
                      <BookOutlinedIcon />
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
                      <PeopleOutlineIcon sx={{color: "#2DA44E"}} />
                    </Grid>
                    <Grid item>
                      <Typography>Seguidores:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.followers}</b></Typography>
                    </Grid>
                  </Box>

                  <Box display="flex">
                    <Grid item lg={2}>
                    <GroupsOutlinedIcon sx={{color: "#0969DA"}} />
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
                <CardActions disableSpacing sx={{/*backgroundColor: '#eaeef2',*/ height: 40}}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon /*sx={{color: "#FF0000"}}*/ />
                  </IconButton>
                  <IconButton aria-label="share" onClick={() => setOpenModal(true)}>
                    <DeleteIcon />
                  </IconButton>
                  
                  <ExpandMore
                    expand={expanded}
                    onClick={toggleDrawer('right', true, item)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    {/* <AddIcon /> */}
                    <Typography sx={{fontSize: 12, color: "#42a5f5"}}>Detalhes</Typography>
                  </ExpandMore>
                </CardActions>
                </Card>

                <Dialog  
                  open={openModal}  
                  close={() => setOpenModal(false)} 
                  remove={() => deleteById(item.id)}
                />
            </Box>
            
            ))
          }
        </Box>
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
