import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactpage from './page/Contactpage';
import Landingpage from './page/Landingpage';
import Login from './page/Loginpage';
import Signup from './page/Signuppage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landingpage />} />
                    <Route path='/contact' element={<Contactpage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;