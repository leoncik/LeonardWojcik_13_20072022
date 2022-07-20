import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error404 from '../../pages/Error404';
import Page from '../../pages/Page/Page';

function App() {
    return (
        <div className="App">
            <PrimaryNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default App;
