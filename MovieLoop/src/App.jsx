import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import Navbar from "../components/Navbar"
import Home, { loader as homeLoader } from "./pages/Home"
import Movies, { loader as movieLoader } from "./pages/Movies"
import Tv, { loader as tvLoader } from "./pages/Tv"
import MovieDetail, { loader as movieDetailLoader } from "./pages/DetailPages/MovieDetail"
import TvDetail, { loader as tvDetailLoader } from "./pages/DetailPages/TvDetail"
import Layout from "../components/Layout"

import "./assets/css/app.css"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} loader={homeLoader} />
    <Route path="/movie" element={<Movies />} loader={movieLoader} />
    <Route path="/movie/:id" element={<MovieDetail />} loader={movieDetailLoader} />
    <Route path="/tv" element={<Tv />} loader={tvLoader} />
    <Route path="/tv/:id" element={<TvDetail />} loader={tvDetailLoader} />
    <Route path="*" element="404" />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
