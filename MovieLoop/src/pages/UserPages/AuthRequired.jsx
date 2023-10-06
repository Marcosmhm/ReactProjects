import { Outlet, Navigate, useLocation } from "react-router-dom"
import { createSession } from '../../../services/api'

export default function AuthRequired() {
  const location = useLocation()
  let params = new URLSearchParams(location.search)

  const fetchCreateSession = async () => {
    return await createSession(localStorage.getItem('token'))
  }

  if (params.get('denied') === 'true') {
    return <Navigate to="/"
      state={{
        message: "You must log in first",
        from: location.pathname
      }} />
  } else if (params.get('approved') === 'true') {
    localStorage.setItem('isLoggedIn', 'true')
    fetchCreateSession()
    return <Navigate to='/favorites'/>
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: {
            message: "You must log in first",
            from: location.pathname
          }
        }}
      />
    );
  }
  return <Outlet />
}