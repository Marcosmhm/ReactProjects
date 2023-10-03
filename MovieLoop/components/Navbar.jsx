import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GoHome } from 'react-icons/go'
import { PiFilmSlate, PiTelevisionSimpleBold } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'

import "../src/assets/css/navbar.css"
import SeachModal from './SearchModal'

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModalOpen() {
    return setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <nav className='navbar-principal'>
        <NavLink to="/">
          {({ isActive }) => isActive ? <GoHome size={32} color='#2779a7' /> : <GoHome size={32}
          />}
        </NavLink>
        <NavLink to="/movie">
          {({ isActive }) => isActive ? <PiFilmSlate size={32} color='#2779a7' /> : <PiFilmSlate size={32} />}
        </NavLink>
        <NavLink to="/tv">
          {({ isActive }) => isActive ? <PiTelevisionSimpleBold size={32} color='#2779a7' /> : <PiTelevisionSimpleBold size={32} />}
        </NavLink>
        <span>
          <button onClick={handleModalOpen}>
            <AiOutlineSearch size={32} />
          </button>
        </span>
        {isModalOpen && <SeachModal onClose={handleCloseModal} isOpen={isModalOpen} />}
      </nav>
    </>
  )
}