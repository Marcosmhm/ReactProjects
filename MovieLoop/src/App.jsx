import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import Navbar from "../components/Navbar"
import Home, { loader as homeLoader } from "./pages/Home"
import Movies, { loader as movieLoader} from "./pages/Movies"
import Tv, {loader as tvLoader} from "./pages/Tv"
import MovieDetail, {loader as movieDetailLoader} from "./pages/MovieDetail/MovieDetail"
import Overview from "../components/Overview"

import "./assets/css/app.css"



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/movies" element={<Movies />} loader={movieLoader} />
      <Route path="/movie/:id" element={<MovieDetail />} loader={movieDetailLoader} />

      <Route path="/shows" element={<Tv />} loader={tvLoader} />
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
