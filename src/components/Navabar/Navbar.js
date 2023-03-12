import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { useGlobalContext } from '../../context/store'

const Navbar = (props) => {
  const location = useLocation()
  const isLinkActive = (to) => {
    return location.pathname === to;
  };
  const { setSearchText } = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const searchCocktail = () =>{
    setSearchText(searchValue.current.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
         <nav className='navbar fixed-top navbar-dark navbar-expand-lg bg-dark'>
          <div className="container-fluid">
              <Link to='/' className='nav-brand'>
                 <img src={logo} alt="log" width='70' height='70'/>
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id='navbarSupportedContent' >
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 nav-cl'>
                    <li className={isLinkActive('/') ? 'active-link nav-item' : 'nav-item'}>
                        <Link to='/' className='nav-link' style={{'fontWeight': 'bold', 'fontSize': '1.2rem'}}>Home</Link>
                    </li>
                    <li className={isLinkActive('/about') ? 'active-link nav-item' : 'nav-item'}>
                        <Link to='/about' className='nav-link' style={{'fontWeight': 'bold', 'fontSize': '1.2rem'}}>About</Link>
                    </li>
                    <li className={isLinkActive('/contact') ? 'active-link nav-item' : 'nav-item'}>
                        <Link to='/contact' className='nav-link' style={{'fontWeight': 'bold', 'fontSize': '1.2rem'}}>Contact</Link>
                    </li>
                    <li className={isLinkActive('/product') ? 'active-link nav-item' : 'nav-item'}>
                        <Link to='/product' className='nav-link' style={{'fontWeight': 'bold', 'fontSize': '1.2rem'}}>Product</Link>
                    </li>
                </ul>
                <form className='d-flex' role='search' onSubmit={handleSubmit}>
                    <input ref={searchValue} onChange={searchCocktail} type="search" className='form-control me-2' placeholder='Search' arial-label='Search'/>
                    <button className='btn btn-primary' type='submit'>Search</button>
                </form>
              </div>
          </div>
       </nav>
  )
}

export default Navbar