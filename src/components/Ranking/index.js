import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { MdFormatListNumbered } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { BsFillArrowUpCircleFill,  BsFillArrowDownCircleFill, BsFillSquareFill} from "react-icons/bs";


const style = {
    root: {
        maxHeight: 345,
        minHeight: 345,
      // maxWidth: 245
      // width: 245
      // height: 80,
      // textAlign: "center",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 2px 15px #8B91A62B",
    },
    title: {
        fontSize: 16,
        color: '#AAB0BD',
    },
    text: {
        fontSize: 11,
        color: '#4A4F5C',
        marginRight: 1
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 20,
        // color: '#AAB0BD',
        color : '#42a5f5'
    },
    dialog: {
        maxHeight: 250,
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
        // marginBottom: 10
      },
}

const data = [
    {"ranking": "1°", "nome": "JavaScript", "data": "23/03/2022"},
    {"ranking": "2°", "nome": "Python", "data": "20/03/2022"},
    {"ranking": "3°", "nome": "Java", "data": "10/02/2022"},
    {"ranking": "4°", "nome": "Typescript", "data": "29/01/2022"},
    {"ranking": "5°", "nome": "C#", "data": "13/01/2022"},
    {"ranking": "6°", "nome": "PHP", "data": "13/01/2022"},
    {"ranking": "7°", "nome": "C++", "data": "13/01/2022"},
    {"ranking": "8°", "nome": "Shell", "data": "13/01/2022"},
    {"ranking": "9°", "nome": "C", "data": "13/01/2022"},
    {"ranking": "10°", "nome": "Ruby", "data": "13/01/2022"},
]

export default function Ranking(props) {
    return(
        <Grid container lg={12} spacing={4}>
            <Grid item lg={12}>
                <Card sx={style.root}>
                    <Grid item lg={12} m={2}>
                        <Box display="flex">
                            <MdFormatListNumbered style={style.icon} />
                            <Typography sx={style.title}><b>Top 10 linguagens de programação</b></Typography>
                        </Box>
                    </Grid>
                    <Divider sx={{color: '#AAB0BD'}} />
                        <Grid item xl={12} lg={12}>
                            <DialogContent sx={style.dialog}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    tabIndex={-1}
                                >
                                    {
                                        data && (data?.map((item, index) => (
                                        <div style={{width: "100%"}}>
                                            <Box display="flex" m={2} >
                                                <Stack direction="row" spacing={4} sx={{ flexGrow: 1 }}>
                                                    <Grid item lg={2}>
                                                        <Typography >{item.ranking}</Typography>
                                                    </Grid>
                                                    <Grid item lg>
                                                        <Typography>{item.nome}</Typography>
                                                    </Grid>
                                                </Stack>
                                                <Grid item lg={2}>
                                                    {
                                                        item.nome !== 'JavaScript' && item.nome !== 'Python' && 
                                                        item.nome !== 'Java' && item.nome !== 'Typescript' &&
                                                        item.nome !== 'C#' && item.nome !== 'PHP' &&
                                                        item.nome !== 'C++' && item.nome !== 'C' &&
                                                        item.nome !== 'Ruby' && (
                                                            <BsFillArrowUpCircleFill style={{height: 20, width: 20, color: '#4caf50'}} />
                                                        )
                                                    }
                                                    {
                                                        item.nome !== 'JavaScript' && item.nome !== 'Python' && 
                                                        item.nome !== 'Java' && item.nome !== 'Typescript' &&
                                                        item.nome !== 'C#' && item.nome !== 'PHP' &&
                                                        item.nome !== 'C++' && item.nome !== 'Shell' &&
                                                        item.nome !== 'Ruby' && (
                                                            <BsFillArrowDownCircleFill style={{height: 20, width: 20, color: 'red'}} />
                                                        )
                                                    }
                                                    {
                                                        item.nome !== 'Shell' && item.nome !== 'C' && (
                                                            <BsFillSquareFill style={{height: 20, width: 20, color: '#006EC7'}} />
                                                        )
                                                    }
                                                </Grid>
                                            </Box>
                                            <Divider sx={{color: '#AAB0BD'}} />
                                        </div>
                                        )))
                                    }
                                </DialogContentText>
                            </DialogContent>
                        </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}