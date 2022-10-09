import MeetupList from "../components/meetups/MeetupList";

export interface DummyMeetupData {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
}

const DUMMY_DATA: DummyMeetupData[] = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

const AllMeetupsPage = (): JSX.Element => {
    return (
        <section>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
};

export default AllMeetupsPage;
