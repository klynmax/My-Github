import React, { useState, useContext, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

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
    const [values, setValues] = useState({
        weight: '',
    });

    const handleChange = (prop) => (event) => {
         setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        setData(repo.reverse())
    }, [])

    function newArray(value) {
        return value.name === values.weight;
    }

    const search = () => {
        let newArr = data?.filter(newArray)
            setData(newArr)
            setValues({weight: ''})
    }

    const clean = () => {
        setData(repo)
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
                <Grid container spacing={14}>
                    <Grid item sx={{marginTop: 1}}>
                        <DialogNew buttonName="Novo usuário" />
                    </Grid>
                    <Grid item lg={4}>
                        <OutlinedInput 
                            onChange={handleChange('weight')}
                            value={values.weight}
                            placeholder="Pesquise pelo nome do usuário"
                            sx={{
                                height: 35,
                                width: 400,
                                fontSize: 12,
                                marginTop: 1,
                                marginLeft: -5
                            }}
                            endAdornment={
                                <>
                                    <Divider orientation="vertical" flexItem />
                                    <SearchIcon 
                                        onClick={search} 
                                        sx={{
                                            cursor: 'pointer',
                                            marginLeft: '4%'
                                        }}
                                    />
                                </>
                            }
                        />
                    </Grid>
                    <Grid item lg={3} sx={{marginTop: 1}}>
                        <Button 
                            variant="outlined"
                            sx={{
                                fontSize: 11
                            }}
                            onClick={clean}
                        >
                            Limpar Filtros
                        </Button>
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