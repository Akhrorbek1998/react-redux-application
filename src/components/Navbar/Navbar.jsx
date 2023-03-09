import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary border-bottom">
            <div class="container">
                <Link to={'/'} class="navbar-brand text-primary"><h3 className='mb-0'>ReduxApp</h3></Link>
                <nav class="nav">
                    <Link to={'/login'} class="nav-link navbar-link">Login</Link>
                    <Link to={'/register'} class="nav-link navbar-link" >Register</Link>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar