import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="container-fluid p-2 bg-color">
            <div className="d-flex justify-content-center">
                <Link to='/' className="link">
                    <h2 className="text-center navbar-title">Coiltails</h2>
                </Link>
            </div>  
        </div>
    )
}

export default Navbar;