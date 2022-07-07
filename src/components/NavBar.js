import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/cocktails'>Cocktails</Link>
            <Link to='/shopping'>Shopping List</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/available'>Available Cocktails</Link>
            <Link to='/changePassword'>Change Password</Link>
        </nav>
    )
}