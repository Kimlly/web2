import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactpage from './page/Contactpage';
import Landingpage from './page/Landingpage';
import Login from './page/Loginpage';
import Signup from './page/Signuppage';
import Homepage from './page/Homepage';
import Createpage from './page/createpage';
import Userpfpage from './page/Userpfpage';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';
import Sidebar from './component/sideBar';
import Account from './page/Account';
import Inbox from './page/Inbox';
import Report from './page/Report';
import Adminpage from './page/Adminpage';
import AdminTable from './page/AdminTable';
import UserTable from './page/UserTable';
import ArtistTable from './page/ArtistTable';

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
            <Route
              path='/homepage'
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/usertable'
              element={
                <ProtectedRoute>
                  <UserTable />
                </ProtectedRoute>
              }
            />
            <Route
              path='/artisttable'
              element={
                <ProtectedRoute>
                  <ArtistTable />
                </ProtectedRoute>
              }
            />
            <Route
              path='/admintable'
              element={
                <ProtectedRoute>
                  <AdminTable />
                </ProtectedRoute>
              }
            />
            <Route
              path='/adminpage'
              element={
                <ProtectedRoute>
                  <Adminpage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/report'
              element={
                <ProtectedRoute>
                  <Report />
                </ProtectedRoute>
              }
            />
            <Route
              path='/inbox'
              element={
                <ProtectedRoute>
                  <Inbox />
                </ProtectedRoute>
              }
            />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path='/contact'
              element={
                <ProtectedRoute>
                  <Contactpage />
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
