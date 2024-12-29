import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage';
import Login from './components/login/login-form-component';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/frontend.github.io/" element={<Homepage />} />
                <Route path="/frontend.github.io/sign-in" element={<Login />} />
            </Routes>
        </Router>
    )
};

export default App;