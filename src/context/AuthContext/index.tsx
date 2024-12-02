import { createContext, ReactNode } from "react"

export const AuthContext = createContext({});

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={{name: "Gabriel"}}>{children}</AuthContext.Provider>
    )
}
