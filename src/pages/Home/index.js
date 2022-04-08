/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CardsDash from '../../components/CardsDash';
import PieGraphic from '../../components/PieGraphic';
import Ranking from "../../components/Ranking";
import LineCharts from "../../components/LineCharts";

function Home() {
    // const { data } = useContext(Context);
    const users = JSON.parse(localStorage.getItem('repository'));
    const repository = JSON.parse(localStorage.getItem('myRepository'));
    const [userData, setUserData] = useState('');
    const [repositoryData, setRepositoryData] = useState('');
    const [allLanguage, setAllLanguage] = useState('');
    const [total, setTotal] = useState('');

    useEffect(() => {
        setUserData(users);
        setRepositoryData(repository)
    }, [])

    const language = repositoryData && repositoryData?.map(function(item) {
        return item.language
    })

    useEffect(() => {
        language && language.reduce(function(obj, lang, total){
            if(!obj[lang]){
                obj[lang] = 1;
            } else {
                obj[lang]++;
            }
            setAllLanguage(obj);
            setTotal(total)
            return obj
        }, {})
    }, [repositoryData])

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
                        number={userData.length}
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="Repositórios"
                        number={repositoryData.length}
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="Linguagens"
                        number={total}
                    />
                </Grid>
                <Grid item lg>
                    <CardsDash 
                        title="Favoritos"
                        number="12"
                    />
                </Grid>
            </Grid>
            <Grid
            // item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xl={12}
                lg={12}
                sx={{marginTop: 5}}
            >
                <Grid item lg>
                    <PieGraphic data={allLanguage} value={total} />
                </Grid>
                <Grid item lg>
                    <Ranking />
                </Grid>
            </Grid>
            <Grid
            // item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xl={12}
                lg={12}
                sx={{marginTop: 5}}
            >
                <LineCharts />
            </Grid>
        </Container>
    )
}

export default Home;