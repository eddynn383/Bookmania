import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './blocks/Header';
import Footer from './blocks/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

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
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="/login" element={<LogIn/>} />
                    </Routes>
                </div>
                <div className="footer-section">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
