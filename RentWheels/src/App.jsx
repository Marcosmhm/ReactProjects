import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import Login from './components/Login'
import SingUp from "./components/Singup"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}/>
    <Route path="/login" element={<Login />} />
    <Route path="/singup" element={<SingUp />} />
    <Route path="*" element="404" />
  </>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
