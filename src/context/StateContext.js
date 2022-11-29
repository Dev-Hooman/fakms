import { createContext, useState } from "react";


export const StateContext = createContext();

export const StateContextProvider = ({children})=>{

    const [open, setOpen] = useState(false);

    return (

        <StateContext.Provider
            value={{
                open,
                setOpen
            }}
        >

            {children}
        </StateContext.Provider>
    )
}