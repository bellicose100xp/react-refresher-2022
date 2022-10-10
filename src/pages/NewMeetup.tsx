import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { MeetupDataNoId } from '../types/Meetup';

const NewMeetupPage: React.FC = () => {
    let navigate = useNavigate();

    const onAddMeetupHandler = (meetupData: MeetupDataNoId) => {
        const firebase_url = process.env.REACT_APP_FIREBASE_URL as string;

        fetch(`${firebase_url}/meetups.json`, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                navigate('/', { replace: true });
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
};

export default NewMeetupPage;
