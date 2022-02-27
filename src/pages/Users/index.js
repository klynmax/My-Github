import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from '@mui/material/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';

import SearchIcon from '@mui/icons-material/Search';

import FieldSearch from '../../components/FieldSearch';
import Card from '../../components/Card';

function Users() {

    const teste = () => {
        alert('teste')
    }
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
                    <IconButton>
                        <GridViewRoundedIcon 
                            onClick={teste}
                            sx={{
                                height: 32, 
                                width: 32,
                            }} 
                            />
                    </IconButton>
                    <IconButton>
                        <DensityMediumOutlinedIcon 
                            onClick={teste}
                            sx={{
                                height: 32, 
                                width: 32,
                            }} 
                            />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={10}>
                <Grid item lg={12}>
                    <Card />
                </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Users;