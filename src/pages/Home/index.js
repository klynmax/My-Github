import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import Context from "../../Context/Context";
import CardsDash from '../../components/CardsDash';

function Home() {
    const { data } = useContext(Context);

    console.log('123', data)
    
    /* data && data.name => verificar se ele existe */
    return(
        <Container fixed>
            <Grid
            // item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xl={12}
                lg={12}
            >
                <Grid item lg>
                    <CardsDash 
                        title="Usuários"
                        number="5"
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="Repositórios"
                        number="12"
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="Linguagens"
                        number="6"
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="teste"
                        number="12"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;