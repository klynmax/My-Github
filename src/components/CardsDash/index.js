import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FaUserFriends } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

import Tooltip from '../Tooltip';

const style = {
  root: {
    // maxWidth: 245
    // width: 245
    height: 80,
    textAlign: "center",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 2px 15px #8B91A62B",
  },
  tag: {
    backgroundColor: '#008000',
    // color: '#008000',
    width: 10,
    height: 100
  },
  titleStyle: {
    fontSize: 16,
    whiteSpace: 'nowrap',
    color: '#AAB0BD',
  },
  number: {
    fontSize: 22,
    // color: '#616161'
  },
  teste: {
    backgroundColor: 'red',
    // color: '#008000',
    width: 10,
    height: 100
  },
  tagBlue: {
    backgroundColor: '#42a5f5',
    width: 10,
    height: 100
  },
  tagRed: {
    backgroundColor: '#ffef62',
    width: 10,
    height: 100
  },
  tagGreen: {
    backgroundColor: '#4caf50',
    width: 10,
    height: 100
  },
  tagPurple: {
    backgroundColor: '#ba68c8',
    width: 10,
    height: 100
  },
  tootipIcon: {
    width: 20,
    height: 20
  }
}


export default function ImgMediaCard(props) {
  
    const {title, number} = props

  return (
    <Grid
        // item
        container
        sm={6}
        md={6}
        lg={12}
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        spacing={4}
        // style={{ marginTop: 10 }}
    >
        <Grid item xs={12} lg xl >
            <Card sx={style.root}>
                <Box display="flex">
                    <div 
                        style={
                            title === 'Usuários' ? style.tagBlue
                            :
                            title === 'Repositórios' ? style.tagPurple
                            :
                            title === 'Linguagens' ? style.tagGreen
                            :
                            style.tagRed

                        } 
                        ></div>
                    <Grid 
                        item
                        // container
                        direction="row-reverse"
                        justifyContent="center"
                        alignItems="center"
                        lg={2}
                    >
                        <Box m={3}>
                            {
                                title === 'Usuários' && (
                                    <FaUserFriends 
                                        style={{
                                            height: 30,
                                            width: 30,
                                            color: '#42a5f5'
                                        }} 
                                    />
                                )
                            }
                            {
                                title === 'Repositórios' && (
                                    <RiGitRepositoryFill 
                                        style={{
                                            height: 30,
                                            width: 30,
                                            color: '#ba68c8'
                                        }} 
                                    />
                                )
                            }
                            {
                                title === 'Favoritos' && (
                                    <AiFillStar 
                                        style={{
                                            height: 30,
                                            width: 30,
                                            color: '#ffef62'
                                        }} 
                                    />
                                )
                            }
                            {
                                title === 'Linguagens' && (
                                    <GoBook 
                                        style={{
                                            height: 30,
                                            width: 30,
                                            color: '#4caf50'
                                        }} 
                                    />
                                )
                            }
                        </Box>
                        {/* <PersonOutlineOutlinedIcon /> */}
                    </Grid>
                    <Grid xs={6} sm={6} md={6} lg>
                        <Box m={1}>
                            <Typography style={style.titleStyle}><b>{title}</b></Typography>
                        </Box>
                        <Box m={1}>
                        <Typography style={style.number}><b>{number}</b>{title == 'Linguagens' ? <Tooltip icon={<InfoIcon sx={style.tootipIcon} />} /> : ''}</Typography>
                        </Box>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    </Grid>
  );
}
