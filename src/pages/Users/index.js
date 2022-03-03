import React, {useState} from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from '@mui/material/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import ReorderIcon from '@mui/icons-material/Reorder';

import SearchIcon from '@mui/icons-material/Search';

import FieldSearch from '../../components/FieldSearch';
import Card from '../../components/Card';
import Table from '../../components/Table';

function Users() {

    const [list, setList] = useState(true)

    return(
        <Container fixed>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xl={12}
            >
                <Grid item lg={12}>
                    <Typography
                        sx={{
                            fontSize: 10,
                        }}
                    ><b>Pesquisar usuários:</b></Typography>
                </Grid>           
                <Grid container spacing={14}>
                    <Grid item lg={10} sx={{marginTop: 1}}>
                        <FieldSearch />
                    </Grid>
                <Grid item lg={2} >
                    {   list === true ? (
                        <>
                            <IconButton>
                                <GridViewRoundedIcon 
                                    sx={{
                                        height: 32, 
                                        width: 32,
                                        color: '#000000'
                                    }} 
                                    />
                            </IconButton>
                            <IconButton>
                                <DensityMediumOutlinedIcon 
                                    onClick={() => setList(false)}
                                    sx={{
                                        height: 32, 
                                        width: 32,
                                    }} 
                                    />
                            </IconButton>
                        </>
                        )
                        :
                        (
                            <>
                                <IconButton>
                                    <GridViewOutlinedIcon 
                                        sx={{
                                            height: 32, 
                                            width: 32,
                                        }} 
                                        onClick={() => setList(true)}
                                    />
                                </IconButton>

                                <IconButton>
                                    <TableRowsRoundedIcon 
                                        sx={{
                                            height: 32, 
                                            width: 32,
                                            color: '#000000'
                                        }} 
                                    />
                                </IconButton>
                            </>
                            
                        )
                    }
                </Grid>
            </Grid>
            <Grid container spacing={10}>
                <Grid item lg={12}>
                    {
                        list === true ? (
                            <Card />
                        )
                        :
                        (
                            <div style={{marginTop: 20}}>
                                <Table />
                            </div>
                        )
                    }
                </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Users;