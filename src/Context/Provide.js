import React from "react";
import Context from "./Context";

const Provider = ({ children }) => {

    const [data, setData] = React.useState('');
    const [repositoryData, setRepositoryData] = React.useState('');
    return(
        <Context.Provider 
            value={{
                data,
                setData,
                repositoryData,
                setRepositoryData
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;