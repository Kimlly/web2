import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactpage from './page/Contactpage';
import Landingpage from './page/Landingpage';
import Login from './page/Loginpage';
import Signup from './page/Signuppage';
import Teampage from './page/teampage';
import Homepage from './page/Homepage';
import Createpage from './page/createpage';
import Userpfpage from './page/userpfpage';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Landingpage />} />
            <Route path='/contact' element={<Contactpage />} />
            <Route path='/team' element={<Teampage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/homepage'
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/createpage'
              element={
                <ProtectedRoute>
                  <Createpage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/userpfpage'
              element={
                <ProtectedRoute>
                  <Userpfpage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
