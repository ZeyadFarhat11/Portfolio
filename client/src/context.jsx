import { createContext, useContext } from "react";

const Context = createContext();

export function ContextProvider ({children}) {
    const value = {};
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default function useGlobalContext() {
    return useContext(Context)
}