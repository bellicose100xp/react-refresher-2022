interface ModelProps {
    onCancel: () => void;
    onConfirm: () => void;
}


const Modal = (props: ModelProps) => {

    const cancelHandler = (): void => {
        props.onCancel();
    };

    const confirmHandler = (): void => {
        props.onConfirm();
    };

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn"  onClick={confirmHandler}>Confirm</button>
        </div>
    );
};


export default Modal;
