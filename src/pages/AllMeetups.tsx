import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MeetupData, FirebaseData } from '../types/Meetup';

// export interface DummyMeetupData {
//     id: string;
//     title: string;
//     image: string;
//     address: string;
//     description: string;
// }

// const DUMMY_DATA: DummyMeetupData[] = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];

const AllMeetupsPage = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setMeetupDataArray] = useState<MeetupData[]>([]);

    useEffect(() => {
        const firebase_url = process.env.REACT_APP_FIREBASE_URL as string;
        fetch(`${firebase_url}/meetups.json`)
            .then((response) => response.json())
            .then((data: FirebaseData) => {
                const meetups: MeetupData[] = [];

                for (let key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetups.push(meetup);
                }
                
                setMeetupDataArray(meetups);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
};

export default AllMeetupsPage;
