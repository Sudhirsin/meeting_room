import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <nav className="navbar navbar-light bg-white fixed-top">
                        <Link to="/" class="navbar-brand">Room Booking</Link>
                        <form class="form-inline">
                            <Link to="/" className="mx-4 text-dark">Home</Link>
                            <Link to="/rooms" className="mx-4 text-dark">Rooms</Link>
                            <Link to="/login" className="mx-4 text-dark">
                                <button className="btn btn-outline-dark">Login</button>
                            </Link>
                            <Link to="/signup" className="mx-4 text-dark">
                                <button className="btn btn-outline-dark">Sign Up</button>
                            </Link>
                            <Link to="/orders" className="mx-4 text-dark">Orders</Link>
                        </form>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
