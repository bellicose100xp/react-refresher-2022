import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';

const Layout: React.FC<React.PropsWithChildren> = (props): JSX.Element => {
    return (
        <>
            <MainNavigation />
            <main className={styles.main}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
