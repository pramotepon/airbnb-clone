import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
            });
        }
    }, []);
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}