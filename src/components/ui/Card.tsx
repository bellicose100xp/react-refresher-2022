import styles from "./Card.module.css";

const Card: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
};

export default Card;