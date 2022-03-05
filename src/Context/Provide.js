import React from "react";
import Context from "./Context";

const Provider = ({ children }) => {

    const [data, setData] = React.useState('')
    return(
        <Context.Provider 
            value={{
                // data: 'Home',
                setData,
                data
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;