import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Table from '../../components/TableRepository';

function Repository(props) {

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
                    <div style={{marginTop: 40}}>
                        <Table />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Repository;