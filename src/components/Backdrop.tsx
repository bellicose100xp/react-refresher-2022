interface BackdropProps {
    onCancel: React.MouseEventHandler<HTMLDivElement>
}

const Backdrop = (props: BackdropProps) => {
    return <div className="backdrop" onClick={props.onCancel} />;
};

export default Backdrop;
