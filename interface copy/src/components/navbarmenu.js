import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'

const NavBarMenu = (props) => {
    const {loginStatus, loginHandlerCb, getUserHandler, getItemHandler, getBrandHandler} = props

    const loginHandler = () => {
        loginHandlerCb(true)
    }

    const logoutHandler = () => {
        localStorage.clear()
        loginHandlerCb(false)
  }
    return(
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/user/add">Add</Link></li>
                        <li><Link className="dropdown-item" to="/user/edit">Edit</Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link className="dropdown-item" to="/user/show" onClick={() => getUserHandler()}>Show</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Item
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Add</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link className="dropdown-item" to="/item/show" onClick={() => getItemHandler()}>Show</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Brand
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Add</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link className="dropdown-item" to="/brand/show" onClick={() => getBrandHandler()}>Show</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">History Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled">Disabled</Link>
                    </li>
                    <li className="nav-item">
                    {/* {loginStatus?
                        <button className='btn btn-sm btn-danger' onClick={() => logoutHandler()}>Logout</button>:
                        <button className='btn btn-sm btn-primary' onClick={() => loginHandler()}>Login</button>
                    } */}
                    {loginStatus?
                        <Link className="nav-link" to="#" onClick={() => logoutHandler()}>Logout</Link>:
                        <Link className="nav-link" to="#" onClick={() => loginHandler()}>Login</Link>
                    }
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </>
    )
}

export default NavBarMenu