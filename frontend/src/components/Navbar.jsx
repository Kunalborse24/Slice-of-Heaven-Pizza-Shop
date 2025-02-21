
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import { useSelector } from 'react-redux';



export function Navbar() {

    const navigate=useNavigate()
    //Read the store buy using selector

    const cart=useSelector(state=>state.cart)

    const onLogout=() => { 
        sessionStorage.removeItem('token')
        navigate('/')

    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/cart">Cart({cart.items.length})</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Button onClick={onLogout} className="nav-link" aria-current="page">Logout</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
