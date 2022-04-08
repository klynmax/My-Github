import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { MdDonutLarge } from "react-icons/md";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { PieChart } from "@rsuite/charts";

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
        color: '#4caf50'
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

const colors = [
    "#0BBF59",
    "#006EC7",
    "#858EA6",
    "#FFBB26",
    "#FF812E",
    "#000000",
    "#D93927",
    "#A9AFC0",
    "#ff9800",
    "#ba68c8",
];


export default function PieGraphic(props) {

    const {data, value} = props;

    const [language, setLanguage] = React.useState([])

    React.useEffect(() => {
        setLanguage([
            ['HTML', data.HTML],
            ['Javascript', data.JavaScript],
            ['TypeScript', data.TypeScript],
            ['Java', data.Java],
            ['Python', data.Python],
            ['PHP', data.PHP],
            ['Ruby', data.Ruby],
            ['CSS', data.CSS],
            ['Kotlin', data.Kotlin],
            ['SCSS', data.SCSS],
        ])
    }, [data])

    return(
        <Grid container lg={12} spacing={4}>
            <Grid item lg={12} >
                <Card sx={style.root}>
                    <Grid item lg={6} m={2}>
                        <Box display="flex">
                            <MdDonutLarge style={style.icon} />
                            <Typography sx={style.title}><b>Principais linguagens</b></Typography>
                        </Box>
                        {/* <Divider /> */}
                    </Grid>
                    <Divider sx={{color: '#AAB0BD'}} />
                    <Grid container>
                        <Grid item lg={8}>
                            <PieChart
                                data={language}
                                donut
                                color={colors}
                                height={250}
                                label
                            />
                            {/* <Typography sx={style.textPie}><b>Total</b></Typography>
                            <Typography sx={style.numbePie}><b>{value}</b></Typography> */}
                        </Grid>
                        <Grid item lg={2} sx={{marginTop: 5}}>
                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#0BBF59"
                                    }}
                                ></div>
                                <Typography sx={style.text} >HTML</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#006EC7"
                                    }}
                                ></div>
                                <Typography sx={style.text} >JavaScript</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#858EA6"
                                    }}
                                ></div>
                                <Typography sx={style.text} >TypeScript</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#FFBB26"
                                    }}
                                ></div>
                                <Typography sx={style.text} >Java</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#FF812E"
                                    }}
                                ></div>
                                <Typography sx={style.text} >Python</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={2} sx={{marginTop: 5}}>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#000000"
                                    }}
                                ></div>
                                <Typography sx={style.text} >PHP</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#D93927"
                                    }}
                                ></div>
                                <Typography sx={style.text} >Ruby</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#A9AFC0"
                                    }}
                                ></div>
                                <Typography sx={style.text} >CSS</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#ff9800"
                                    }}
                                ></div>
                                <Typography sx={style.text} >Kotlin</Typography>
                            </Box>

                            <Box display="flex" m={1}>
                                <div 
                                    style={{
                                        borderRadius: 100,
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                        marginTop: 4,
                                        backgroundColor: "#ba68c8"
                                    }}
                                ></div>
                                <Typography sx={style.text} >SCSS</Typography>
                            </Box>

                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}