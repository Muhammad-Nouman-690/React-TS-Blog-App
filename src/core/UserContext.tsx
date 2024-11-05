import {Dispatch, SetStateAction, createContext} from 'react'

export interface User {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    
}

export const initialUserValue: User = {
    name: " ",
    setName: () => { },
}

export const UserContext = createContext(initialUserValue);