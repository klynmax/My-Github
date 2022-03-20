import React, {useEffect, useContext} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Table from '../../components/TableRepository';
import DialogNew from '../../components/DialogNew';
import Context from '../../Context/Context';

function Repository() {

    const repositoryList = JSON.parse(localStorage.getItem('myRepository'));
    const {repositoryData, setRepositoryData} = useContext(Context);

    useEffect(() => {
        setRepositoryData(repositoryList.reverse())
    }, [])

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
                    <DialogNew buttonName="Novo reposiório" />
                </Grid>
                <Grid item lg={12}>
                    <div style={{marginTop: 40}}>
                        <Table rows={repositoryData} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Repository;