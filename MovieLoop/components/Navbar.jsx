import { NavLink, } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GoHome } from 'react-icons/go'
import { PiFilmSlate, PiTelevisionSimpleBold } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import { getToken, deleteSession } from '../services/api'
import "../src/assets/css/navbar.css"
import SeachModal from './SearchModal'

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loggedState, setLoggedState] = useState(localStorage.getItem('isLoggedIn'))

  function handleModalOpen() {
    return setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  const handleLoginClick = async () => {
    const loginToken = await getToken()
    if (loginToken) window.location.href = `https://www.themoviedb.org/authenticate/${loginToken}?redirect_to=http://localhost:5173/favorites`
  }

  const handleLogoutClick = async () => {
    localStorage.setItem('isLoggedIn', 'false')
    setLoggedState('false')
    deleteSession(localStorage.getItem('sessionId'))
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
        {loggedState === 'false' || !loggedState ?
          <span >
            <BiLogIn size={32} onClick={handleLoginClick} />
          </span> : loggedState === 'true' ? (
            <>
              <NavLink to='/favorites'>
              {({ isActive }) => isActive ? <MdOutlineFavoriteBorder size={32} color='#2779a7' /> : <MdOutlineFavoriteBorder size={32} />}
              </NavLink>
              <span>
                <BiLogOut size={32} onClick={handleLogoutClick} style={{marginLeft: '-5px'}} />
              </span>
            </>) : ''
          }
        {isModalOpen && <SeachModal onClose={handleCloseModal} isOpen={isModalOpen} />}
      </nav>
    </>
  )
}