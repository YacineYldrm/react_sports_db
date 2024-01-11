import { createContext, useContext, useState } from "react";
const DarkModContext = createContext()


const DarkModeProvider = ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(false)
    return ( 
        <DarkModContext.Provider value={{isDarkMode,setIsDarkMode}}>
            {children}
        </DarkModContext.Provider>
    );
};
const useDarkmode = ()=> { 
    const context = useContext(DarkModContext);
    if (!context) {
        throw new Error('useDarkMode kann nur im  Provider funktionieren')
    }
    return context;
} ;
export {DarkModeProvider,useDarkmode} ;