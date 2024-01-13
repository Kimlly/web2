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
import Sidebar from './component/sideBar';
import ManageUser from'./page/ManageUser';
import Message from'./page/Message';
import Report from'./page/Report';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Landingpage />} />
            <Route path='/team' element={<Teampage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/report' element={<Report />} />
            <Route path='/message' element={<Message />} />
            <Route path='/manageuser' element={<ManageUser />} />
            <Route
              path='/homepage'
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/contact'
              element={
                <ProtectedRoute >
                  <Contactpage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/createpage'
              element={
                <ProtectedRoute >
                  <Createpage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/userpfpage'
              element={
                <ProtectedRoute >
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
