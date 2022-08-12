import Navbar from './layouts/components/Header/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes></Routes>
                Hello world
            </div>
        </Router>
    );
}

export default App;
