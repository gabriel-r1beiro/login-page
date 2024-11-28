import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContext{
    theme: "light" | "dark";
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContext | any>(null);

interface ThemeProvider{
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProvider) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
