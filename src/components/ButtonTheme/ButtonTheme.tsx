import { useTheme } from '../../context/ThemeProvider/ThemeProvider'
import { FaMoon, FaRegSun  } from "react-icons/fa";

import style from "./style.module.css";

export const ButtonTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            { theme === "light" 
                ? <span className={style.moon}><FaMoon /></span> 
                : <span className={style.sun}><FaRegSun/></span>}
        </button>
    )
}
