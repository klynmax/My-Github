import React, { useContext } from "react";
import FieldSearch from '../../components/FieldSearch';
import Context from "../../Context/Context";

import Card from '../../components/Card'

function Home() {
    const { data } = useContext(Context);
    
    /* data && data.name => verificar se ele existe */
    return(
        <div>
            <h1>Aqui será o dashboard</h1>
        </div>
    )
}

export default Home;