import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

import { USERS } from '../../shared/Users.js';

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
      <Grid item lg={12} >
        <Box 
          display="flex"
          flexWrap="wrap"
        >
          { USERS.map((item, index) => (
            <Box mx={1.1} sx={{ width: 365, marginTop: 2 }}>
              <Card >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500], width: 60, height: 60 }} aria-label="recipe">
                      <CardMedia
                        component="img"
                        image={item.url}
                        alt="Paella dish"
                        sx={{borderRadius: '100%', width: 100}}
                      />
                    </Avatar>
                  }
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                  sx={{fontSize: 100}}
                  title={item.nome}
                  // subheader="September 14, 2016"
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
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.repositorios}</b></Typography>
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
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.seguidores}</b></Typography>
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
                      <Typography sx={{fontSize: 18}}><b>&nbsp;&nbsp;{item.seguindo}</b></Typography>
                    </Grid>
                  </Box>
                  
                </CardContent>
                <Divider />
                <CardActions disableSpacing sx={{backgroundColor: '#eaeef2'}}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon /*sx={{color: "#FF0000"}}*/ />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
                </Card>
            </Box>
            ))
          }
        </Box>
      </Grid>
    </Grid>
  );
}
