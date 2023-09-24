import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "./pages/Home"
import "./assets/app.css"



const router = createBrowserRouter(createRoutesFromElements(
  
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/movies" element="Movies goes here" />
      <Route path="/movie/:id" element="Specific movie goes here" />
      <Route path="/shows" element="Shows goes here" />
      <Route path="/show/id" element="Specific show goes here" />
      <Route path="*" element="404" />
    </Route>
  
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
