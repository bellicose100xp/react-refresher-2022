import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

const Navbar: React.FC = (): JSX.Element => {
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link" end>
                            All Meetups
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-meetup" className="nav-link">
                            New Meetup
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/favorites" className="nav-link">
                            My Favorites
                            <span className={styles.badge}>{favoriteCtx.totalFavorites}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
