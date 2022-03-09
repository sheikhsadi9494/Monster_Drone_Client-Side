import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/home' element={<HomeContainer />}/>
        <Route path='product/:productId' element={<PrivateRoute><PlaceOrder/></PrivateRoute>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="expolre" element={<AllProducts/>}/>
      </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
