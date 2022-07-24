// Page components
import Home from '../../pages/Home/Home';
import Error404 from '../../pages/Error404';
import SignIn from '../../pages/SignIn/SignIn';
import Footer from '../layout/Footer/Footer';
import MainNavigation from '../layout/MainNavigation/MainNavigation';
import User from '../../pages/User/User/User';

// Routing
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
