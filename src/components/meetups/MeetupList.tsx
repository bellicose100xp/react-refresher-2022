import { DummyMeetupData } from '../../pages/AllMeetups';
import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

interface MeetupListProps {
    meetups: DummyMeetupData[]
}

const MeetupList = (props: MeetupListProps): JSX.Element => {
    return (
        <ul className={styles.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} {...meetup} />)}
        </ul>
    );
};

export default MeetupList;