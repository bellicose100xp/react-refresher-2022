import { useRef } from 'react';
import Card from '../ui/Card';

import { MeetupDataNoId } from "../../types/Meetup";

import styles from './NewMeetupForm.module.css';

interface NewMeetupFormProps {
    onAddMeetup: (meetupData: MeetupDataNoId) => void;
}

const NewMeetupForm: React.FC<NewMeetupFormProps> = (props) => {
    const titleInputRef = useRef<HTMLInputElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const addressInputRef = useRef<HTMLInputElement | null>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredTitle = (titleInputRef.current as HTMLInputElement).value;
        const enteredImage = (imageInputRef.current as HTMLInputElement).value;
        const enteredAddress = (addressInputRef.current as HTMLInputElement)
            .value;
        const enteredDescription = (
            descriptionInputRef.current as HTMLTextAreaElement
        ).value;

        const meetupData: MeetupDataNoId = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        // console.log(meetupData);
        props.onAddMeetup(meetupData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        id="title"
                        type="text"
                        ref={titleInputRef}
                        required
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input id="image" type="url" required ref={imageInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        required
                        ref={addressInputRef}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows={5}
                        required
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
