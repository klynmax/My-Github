import React, {useEffect, useContext} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Table from '../../components/TableRepository';
import DialogNew from '../../components/DialogNew';
import Context from '../../Context/Context';
import Empty from '../../components/Empty';

function Repository() {

    const repositoryList = JSON.parse(localStorage.getItem('myRepository'));
    const {repositoryData, setRepositoryData} = useContext(Context);

    const [values, setValues] = React.useState({
        weight: '',
    });

    useEffect(() => {
        setRepositoryData(repositoryList.reverse())
    }, [])

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
   };

   function newArray(value) {
    return value.name === values.weight;
}

const search = () => {
    let newArr = repositoryList?.filter(newArray)
    setRepositoryData(newArr)
    setValues({weight: ''})
}

const clean = () => {
    setRepositoryData(repositoryList)
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
                <Grid item lg={3}>
                    <DialogNew buttonName="Novo reposiório" />
                </Grid>
                <Grid item lg={5}>
                        <OutlinedInput 
                            onChange={handleChange('weight')}
                            value={values.weight}
                            placeholder="Pesquise pelo nome do repositório"
                            sx={{
                                height: 35,
                                width: 400,
                                fontSize: 12,
                                marginTop: 1,
                                // marginLeft: -5
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
                <Grid item lg={12}>
                    {
                        repositoryData.length > 0 ? (
                            <div style={{marginTop: 40}}>
                                <Table rows={repositoryData} />
                            </div>
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
                                <Grid item sx={{marginTop: 15}}>
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
        </Container>
    )

}

export default Repository;