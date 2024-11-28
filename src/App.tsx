import { useTheme } from "./context/ThemeProvider/ThemeProvider"

import "./App.css";
import { ButtonTheme } from "./components/ButtonTheme/ButtonTheme";

export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      {theme} <br />
      <ButtonTheme />
    </div>
  )
}
