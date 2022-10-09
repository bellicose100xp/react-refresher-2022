import Todo from './components/Todo';

const App: React.FC = () => {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text="Learn React" />
            <Todo text="Master React" />
            <Todo text="Explore Full React Capability" />

        </div>
    );
};

export default App;
