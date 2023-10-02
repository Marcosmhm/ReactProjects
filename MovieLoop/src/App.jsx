import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home, { loader as homeLoader } from "./pages/Home"
import Movies, { loader as movieLoader } from "./pages/Movies"
import Tv, { loader as tvLoader } from "./pages/Tv"
import MovieDetail, { loader as movieDetailLoader } from "./pages/DetailPages/MovieDetail"
import TvDetail, { loader as tvDetailLoader } from "./pages/DetailPages/TvDetail"
import MovieCategory, {loader as movieCategoryLoader} from "./pages/CategoryPages/MovieCategory"
import PersonDetail, {loader as personDetailLoader} from "./pages/DetailPages/PersonDetail"
import Layout from "../components/Layout"

import "./assets/css/app.css"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} loader={homeLoader} />
    <Route path="/movie" element={<Movies />} loader={movieLoader} />
    <Route path="/movie/category/:query" element={<MovieCategory/>} loader={movieCategoryLoader} />
    <Route path="/movie/:id" element={<MovieDetail />} loader={movieDetailLoader} />
    <Route path="/tv" element={<Tv />} loader={tvLoader} />
    <Route path="/tv/category/:query" element={'<Tv />'} />
    <Route path="/tv/:id" element={<TvDetail />} loader={tvDetailLoader} />
    <Route path="/person/:id" element={<PersonDetail />} loader={personDetailLoader} />
    <Route path="*" element="404" />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
