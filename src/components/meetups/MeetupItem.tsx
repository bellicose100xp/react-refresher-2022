// import { DummyMeetupData } from '../../pages/AllMeetups';
import { useContext } from 'react';
import { MeetupData } from '../../types/Meetup';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
import styles from './MeetupItem.module.css';

const MeetupItem: React.FC<MeetupData> = (props): JSX.Element => {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    const toggleFavoritesStatusHandler = (): void => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({ ...props });
        }
    };

    return (
        <Card>
            <li className={styles.item}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites': 'Add to Favorites'}</button>
                </div>
            </li>
        </Card>
    );
};

export default MeetupItem;
