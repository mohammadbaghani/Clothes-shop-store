import React from "react";
import { createContext, useState } from "react";
import Main from './Main';
export const UsernameContext = createContext()
function Context() {

    const [isActive, setIsActive] = useState(false);
    function ch() {
        setIsActive(true)
    }

    return (
        <>      <UsernameContext.Provider value={{ isActive, setIsActive }}>
            <Main />
        </UsernameContext.Provider>
        </>


    );
}

export default Context
