
import React from 'react';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => (
    <div>
        {/* <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/fitpeo' element={<Home></Home>}/>
            </Routes>
        </BrowserRouter> */}
        <Home></Home>
    </div>
);
    
export default App;
