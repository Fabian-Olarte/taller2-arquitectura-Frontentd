import react, { createContext, useState } from "react";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export const AccountContext = createContext();

export const AccountProvider = ({children}) => {

    const [user, setUser] = useState();

    return (
        <AccountContext.Provider value={{user, setUser}}>
            {children}
        </AccountContext.Provider>
    )
}

