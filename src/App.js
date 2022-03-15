import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddProducts from './Pages/Dashbord/Admin/AddProducts/AddProducts';
import MakeAdmin from './Pages/Dashbord/Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dashbord/Admin/ManageAllOrders/ManageAllOrders';
import DashbordHome from './Pages/Dashbord/DashbordHome/DashbordHome';
import MyOrders from './Pages/Dashbord/MyOrders/MyOrders';
import Pay from './Pages/Dashbord/Pay/Pay';
import Review from './Pages/Dashbord/Review/Review';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MangeProducts from './Pages/Dashbord/Admin/ManageProducts/MangeProducts'

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
        <Route path="dashbord" element={<PrivateRoute><DashbordHome/></PrivateRoute>}>
          <Route index element={<MyOrders/>}/>  
          <Route path="review" element={<Review/>}/>  
          <Route path="pay" element={<Pay/>}/>  
          <Route path="makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>  
          <Route path="manageAllOrders" element={<AdminRoute><ManageAllOrders/></AdminRoute>}/>  
          <Route path="addProduct" element={<AdminRoute><AddProducts/></AdminRoute>}/>  
          <Route path="managePorducts" element={<AdminRoute><MangeProducts/></AdminRoute>}/>  
        </Route>
      </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
