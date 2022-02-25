import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

import FieldSearch from '../../components/FieldSearch';

function Users() {
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
                            fontSize: 10
                        }}
                    ><b>Pesquisar usuários:</b></Typography>
                </Grid>
               
                    <Grid container spacing={18}>
                        <Grid item lg={10}>
                            <FieldSearch />
                        </Grid>
                        <Grid item lg={2} >
                            <GridViewOutlinedIcon 
                                sx={{
                                    height: 32, 
                                    width: 32,
                                    cursor: 'pointer',
                                }} 
                            />
                            <DensityMediumOutlinedIcon 
                                sx={{
                                    height: 32, 
                                    width: 32,
                                    cursor: 'pointer',
                                }} 
                            />
                        </Grid>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default Users;