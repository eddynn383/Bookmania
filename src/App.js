import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './blocks/Header';
import Home from './pages/Home';
import Library from './pages/Library';

import './reset.scss';
import './app.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="header-section">
                    <Header />
                </div>
                <div className="content-section">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/library" element={<Library/>} />
                    </Routes>
                </div>
                <div className="footer-section">
                    test
                </div>
            </div>
        </Router>
    );
}

export default App;
