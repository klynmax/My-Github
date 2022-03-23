import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { MdDonutLarge } from "react-icons/md";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { LineChart, YAxis, Line } from "@rsuite/charts";
import { AiOutlineLineChart } from "react-icons/ai";


const style = {
    root: {
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
        color: '#ff9800'
    },
    textPie: {
        width: 34,
        position: 'relative',
        left: 163,
        bottom: '125px',
        fontSize: 16,
        color: '#AAB0BD',
        opacity: 0.98,
        zIndex: 3,
        marginTop: -5,
    },
    numbePie: {
        width: 34,
        position: 'relative',
        left: 165,
        bottom: '125px',
        fontSize: 30,
        // color: '#AAB0BD',
        opacity: 0.87,
        zIndex: 3,
        marginTop: 1,
    }
}

const data = [
  ['2015', '1', '2', '3', '0', '7', '4', '6', '9', '8', '5'],
  ['2016', '1', '2', '3', '0', '6', '4', '5', '9', '8', '7'],
  ['2017', '1', '2', '3', '10', '6', '4', '5', '8', '7', '9'],
  ['2018', '1', '2', '3', '7', '6', '4', '5', '9', '8', '10'],
  ['2019', '1', '3', '2', '5', '7', '4', '6', '9', '8', '10'],
  ['2020', '1', '3', '2', '4', '5', '6', '7', '9', '8', '10'],
  ['2021', '1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
];

export default function LineCharts() {
    return(
        <Grid container lg={12} spacing={4} >
            <Grid item lg={12} >
                <Card sx={style.root}>
                    <Grid item lg={6} m={2}>
                        <Box display="flex">
                            <AiOutlineLineChart style={style.icon} />
                            <Typography sx={style.title}><b>Principais linguagens no últimos 6 anos </b></Typography>
                        </Box>
                    </Grid>
                    <Divider sx={{color: '#AAB0BD'}} />
                    <Grid item lg={12}>
                    <LineChart data={data} height={400}>
                        <YAxis axisLabel={value => `${value}°`} />
                        <Line name="JavaScript" />
                        <Line name="Python" />
                        <Line name="Java" />
                        <Line name="TypeScript" />
                        <Line name="C#" />
                        <Line name="PHP" />
                        <Line name="C++" />
                        <Line name="Shell" />
                        <Line name="C" />
                        <Line name="Ruby" />
                    </LineChart>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}