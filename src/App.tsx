import { useTheme } from "./context/ThemeProvider/ThemeProvider"

import "./App.css";
import { Header } from "./components/Headers/Header";
import { Main } from "./components/Main/Main";

export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Main />
    </div>
  )
}
