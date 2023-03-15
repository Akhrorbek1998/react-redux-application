import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary border-bottom">
            <div className="container">
                <Link to={'/'} className="navbar-brand text-primary"><h3 className='mb-0'>ReduxApp</h3></Link>
                <nav className="nav">
                    <Link to={'/login'} className="nav-link navbar-link">Login</Link>
                    <Link to={'/register'} className="nav-link navbar-link" >Register</Link>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar