import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error404 from '../../pages/Error404';
import Page from '../../pages/Page/Page';
import Footer from '../layout/Footer/Footer';
import MainNavigation from '../layout/MainNavigation/MainNavigation';

function App() {
    return (
        <div className="App">
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
