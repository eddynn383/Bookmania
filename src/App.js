import AddBooks from "./blocks/AddBooks";
import './reset.css';
import './style.css';

function App() {
    return (
        <div className="App">
            <div className="container container--flex container--center">
                <div className="container_inner">
                    <h1 className="text-brand">Add Book</h1>
                    <AddBooks />
                </div>
            </div>
        </div>
    );
}

export default App;
