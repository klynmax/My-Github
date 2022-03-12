import React, { useState, useContext, useEffect } from "react";
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
import Context from '../../Context/Context';
import DrawerRigth from '../../components/DrawerRigth';

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

    useEffect(() => {
        setData(repo)
    }, [])

    const [list, setList] = useState(true)

    // console.log('123', data.reverse())

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
                            fontSize: 12,
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
                            list === true ? (
                                <Card data={data} />
                            )
                            :
                            (
                                <div style={{marginTop: 40}}>
                                    <Table data={data} />
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