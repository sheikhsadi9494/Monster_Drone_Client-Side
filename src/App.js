import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      {/* <HomeContainer></HomeContainer> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/home' element={<HomeContainer />}/>
        <Route path='product/:productId' element={<PlaceOrder/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
