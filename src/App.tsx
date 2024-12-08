import { useTheme } from "./context/ThemeProvider/ThemeProvider"

import "./App.css";
import { Header } from "./components/Headers/Header";
import { Main } from "./components/Main/Main";
import { useEffect } from "react";

export const App = () => {
  // useEffect(() => {
  //   fetch("http://localhost:3333/users")
  //   .then(res => res.json())
  //   .then(data => console.log(data[0]))
  // })
  const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Main />
    </div>
  )
}
