import { createContext, useState } from 'react';
import { MeetupData } from '../types/Meetup';

interface FavoritesContextInterface {
    favorites: MeetupData[];
    totalFavorites: number;
    addFavorite: (meetupData: MeetupData) => void;
    removeFavorite: (meetupId: string) => void;
    itemIsFavorite: (meetupId: string) => boolean;
}

const initialState = {
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetupData: MeetupData): void => {},
    removeFavorite: (meetupId: string): void => {},
    itemIsFavorite: (meetupId: string): boolean => false,
};

// create context
const FavoritesContext = createContext<FavoritesContextInterface>(initialState);

// regular react functional component that acts as Context Provider (on the other end will be Context Receivers)
export const FavoritesContextProvider: React.FC<React.PropsWithChildren> = (
    props
) => {
    // using setState() to update context state when it changes
    // here we are updating 'favorites' array so the type for setState() is set to FavoritesContextInterface['favorites'] which is MeetupData[]
    const [userFavorites, setUserFavorites] = useState<
        FavoritesContextInterface['favorites']
    >([]);

    const addFavoriteHandler = (favoriteMeetup: MeetupData): void => {
        setUserFavorites((prevUserFavorite) => [
            ...prevUserFavorite,
            favoriteMeetup,
        ]);
    };

    const removeFavoriteHandler = (meetupId: string): void => {
        setUserFavorites((prevUserFavorites) =>
            prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
        );
    };

    const itemIsFavoriteHandler = (meetupId: string): boolean =>
        userFavorites.some((meetup) => meetup.id === meetupId);

    // context variable that stores the current state after every setState() update
    const context: FavoritesContextInterface = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        // this is what provides context, value={} stores the current context values
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
