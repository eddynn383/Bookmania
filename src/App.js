import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './blocks/Header'
import Footer from './blocks/Footer'
import SidePanel from './blocks/SidePanel'
import Home from './pages/Home'
import Library from './pages/Library'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

import './reset.scss'
import './app.scss'
import { AuthProvider } from './contexts/AuthContext'

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App layout">
                    <div className="layout_inner">
                        <div className="layout_left">
                            <div className="header-section">
                                <Header />
                            </div>
                            <div className="content-section">
                                <Routes>
                                    <Route exact path="/" element={<Home/>} />
                                    <Route path="/library" element={<Library/>} />
                                    <Route path="/signup" element={<SignUp/>} />
                                    <Route path="/login" element={<LogIn/>} />
                                </Routes>
                            </div>
                            {/* <div className="footer-section">
                                <Footer />
                            </div> */}
                        </div>
                        <div className="layout_right">
                            <SidePanel />
                        </div>
                    </div>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
