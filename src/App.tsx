import { useTheme } from "./context/ThemeProvider/ThemeProvider"

import "./App.css";
import { Header } from "./components/Headers/Header";

export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Header />
    </div>
  )
}
