import { useTheme } from "./context/ThemeProvider/ThemeProvider"

import "./App.css";
import { ButtonTheme } from "./components/ButtonTheme/ButtonTheme";
import { Form } from "./components/FormLogin/Form";

export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <div>
      </div>
      <div className="conteiner-main">
        
        <Form />
      </div>
    </div>
  )
}
