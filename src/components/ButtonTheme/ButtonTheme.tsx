import React from 'react'
import { useTheme } from '../../context/ThemeProvider/ThemeProvider'

export const ButtonTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            Alterar para o tema
            { theme === "light" ? " Escuro" : " Claro"}
        </button>
    )
}
