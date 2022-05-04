import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 20px;
  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`
const login = localStorage.getItem("token")
export const Navbar = () => {
  
const history = useHistory()


  function logout(event){
    debugger
    axios.delete("http://localhost:3001/users/sign_out", {withCredentials: true} ).then(
    localStorage.removeItem("token"),
    localStorage.removeItem("user"),
    //history.push('/login'), 
    window.location.reload())
  } 
  if (login) {
    return (
      <nav>
    <div className="nav-wrapper indigo darken-4 px1">
      <a href="/" className="brand-logo">
        Your Notes
      </a>

      <ul className="right hide-on-med-and-down">
      <li>
          <NavLink exact to="/" className="main-nav" activeClassName='main-nav-active'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" className="main-nav" activeClassName='main-nav-active'>Profile</NavLink>
        </li>
        <li>
        <NavLink to="/" onClick={logout} >Log out</NavLink>
        </li>       
        </ul>
    </div>
  </nav>
    )
  }
  return(
  <nav>
    <div className="nav-wrapper indigo darken-4 px1">
      <a href="/" className="brand-logo">
        Posts
      </a>
      <ul className="right hide-on-med-and-down">
      <li>
          <NavLink exact to="/" className="main-nav" activeClassName='main-nav-active'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/sign_up" className="main-nav" activeClassName='main-nav-active'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink exact to="/login" className="main-nav" activeClassName='main-nav-active'>Log In</NavLink>
        </li>
        </ul>
    </div>
  </nav>
)
}