import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { PiFilmSlate, PiTelevisionSimpleBold } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'

import "../src/assets/sidebar.css"

export default function Sidebar() {

  return (
    <>
      <nav>
        <NavLink to="/">
          {({ isActive }) => isActive ? <GoHome size={32} color='#2779a7' /> : <GoHome size={32}/>}
        </NavLink>
        <NavLink to="/movies">
        {({ isActive }) => isActive ? <PiFilmSlate size={32} color='#2779a7' /> : <PiFilmSlate size={32} />}
        </NavLink>
        <NavLink to="/shows">
        {({ isActive }) => isActive ? <PiTelevisionSimpleBold size={32} color='#2779a7' /> : <PiTelevisionSimpleBold size={32} />}
        </NavLink>
        <AiOutlineSearch size={32}/>
      </nav>
      <Outlet />
    </>
  )
}