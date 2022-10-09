// import Todo from './components/Todo';

// const App: React.FC = () => {
//     return (
//         <div>
//             <h1>My Todos</h1>
//             <Todo text="Learn React" />
//             <Todo text="Master React" />
//             <Todo text="Explore Full React Capability" />

//         </div>
//     );
// };

// export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<AllMeetupsPage />} />
                <Route path="/new-meetup" element={<NewMeetupPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </>
    );
};

export default App;
