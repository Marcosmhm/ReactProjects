import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import LoginSingup from "./components/LoginSingup"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}/>
    <Route path="/test" element={<LoginSingup />} />
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
