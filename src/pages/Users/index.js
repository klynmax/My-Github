import React, { useState, useContext, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';

import Card from '../../components/Card';
import Table from '../../components/Table';
import Context from '../../Context/Context';
import DialogNew from '../../components/DialogNew';
import Empty from '../../components/Empty';

const styles = {
    iconActive: {
        height: 32, 
        width: 32,
        color: '#000000'
    },
    iconDisabled: {
        height: 32, 
        width: 32,
    }
  };

function Users() {

    const repo = JSON.parse(localStorage.getItem('repository'));
    const { data, setData } = useContext(Context);
    const [list, setList] = useState(true)

    useEffect(() => {
        setData(repo.reverse())
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
                <Grid container spacing={14}>
                    <Grid item lg={10} sx={{marginTop: 1}}>
                        <DialogNew buttonName="Novo usuário" />
                    </Grid>
                    <Grid item lg={2} >
                        {   list === true ? (
                            <>
                                <IconButton>
                                    <GridViewRoundedIcon 
                                        sx={styles.iconActive}
                                    />
                                </IconButton>
                                <IconButton>
                                    <DensityMediumOutlinedIcon 
                                        onClick={() => setList(false)}
                                        sx={styles.iconDisabled} 
                                        />
                                </IconButton>
                            </>
                            )
                            :
                            (
                                <>
                                    <IconButton>
                                        <GridViewOutlinedIcon 
                                            sx={styles.iconDisabled}  
                                            onClick={() => setList(true)}
                                        />
                                    </IconButton>

                                    <IconButton>
                                        <TableRowsRoundedIcon 
                                            sx={styles.iconActive}
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
                            data.length > 0 ? (
                                list === true ? (
                                    <Card dataCard={data} />
                                )
                                :
                                (
                                    <div style={{marginTop: 40}}>
                                        <Table data={data} />
                                    </div>
                                )
                            )
                            :
                            (
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    xl={12}
                                >
                                    <Grid item sx={{marginTop: 10}}>
                                        <Empty 
                                            title="Nenhum Repositorio Cadastrado!"
                                            text="Cadastre um novo repositorio"
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Users;