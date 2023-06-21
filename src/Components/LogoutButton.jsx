import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Features/Auth/AuthSlice'
import { logoutEvents } from '../Features/Events/EventSlice'

const LogoutButton = () => {
    const dispatch=useDispatch()
    const handleLogoutClick=(e)=>{
        e.preventDefault()
        dispatch(logout())
        dispatch(logoutEvents([]))
    }
  return (
    <>
    <button style={{marginLeft:"10px"}}
    className='btn btn-danger'
    onClick={handleLogoutClick}>Logout</button>
    </>
  )
}

export default LogoutButton