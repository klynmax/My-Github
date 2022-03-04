import React from "react";
import Context from "./Context";

const Provider = ({ children }) => {

    const [name, setName] = React.useState('')
    return(
        <Context.Provider 
            value={{
                data: 'Home',
                setName,
                name
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;