import { BrowserRouter, Routes, Route } from 'react-router-dom';


function app() {
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

export default app;