import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

interface TodoProps {
    text: string;
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false); // initial value: false

    const deleteHandler = (): void => {
        setModalIsOpen(true);
    };

    const closeModalHandler = (): void => {
        setModalIsOpen(false);
    };

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            
            {/* Passing function here as a pointer the needs to be called in Backdrop.js */}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}{' '}
        </div>
    );
};

export default Todo;
