import React, { useContext } from "react";
import FieldSearch from '../../components/FieldSearch';
import Context from "../../Context/Context";

import Card from '../../components/Card'

function Home() {
    const { data } = useContext(Context);
    console.log(data)
    /* data && data.name => verificar se ele existe */
    return(
        <div>
            <h1>{data}</h1>
            <FieldSearch />
            <Card />
        </div>
    )
}

export default Home;