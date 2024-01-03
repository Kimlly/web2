import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactpage from './page/Contactpage';
import Landingpage from './page/Landingpage';
import Login from './page/Loginpage';
import Signup from './page/Signuppage';
import Teampage from './page/teampage';
import Homepage from './page/Homepage';
import Recoverpwpage from './page/recoverpwpage';
import Resetpw from './page/resetpwpage';
import Artisthomepage from './page/artisthomepage';
import Createpage from './page/createpage';
import Userpfpage from './page/userpfpage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landingpage />} />
                    <Route path='/contact' element={<Contactpage />} />
                    <Route path='/team' element={<Teampage/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/homepage' element={<Homepage />} />
                    <Route path='/recoverpw' element={<Recoverpwpage />} />
                    <Route path='/resetpw' element={<Resetpw />} />
                    <Route path='/artisthomepage' element={<Artisthomepage />} />
                    <Route path='/createpage' element={<Createpage />} />
                    <Route path='/userpfpage' element={<Userpfpage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;