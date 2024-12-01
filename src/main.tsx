import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from  "./App"
import { ThemeProvider } from './context/ThemeProvider/ThemeProvider';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Form } from './components/FormLogin/Form';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Form/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
