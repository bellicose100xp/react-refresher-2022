import { MeetupData } from '../../types/Meetup';
// import { DummyMeetupData } from '../../pages/AllMeetups';
import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

interface MeetupListProps {
    meetups: MeetupData[]
}

const MeetupList: React.FC<MeetupListProps> = (props): JSX.Element => {
    return (
        <ul className={styles.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} {...meetup} />)}
        </ul>
    );
};

export default MeetupList;