import {useState} from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import {Route, Routes, Navigate } from 'react-router-dom';
import Productpage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const PrivateRoute = () => {
    return authenticated == true ? <Userpage /> : <Navigate to="/login" />
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
