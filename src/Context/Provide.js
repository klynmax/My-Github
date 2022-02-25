import React from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    return(
        <Context.Provider value={{data: 'Home'}}>
            {children}
        </Context.Provider>
    );
};

export default Provider;