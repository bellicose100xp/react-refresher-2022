import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <h1 className='meetup-nav-main-text'>React Meetups</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link" end>
                            Some NavLink
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-meetup" className="nav-link">
                            New Meetup
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/favorites" className="nav-link">
                            Favorite
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
