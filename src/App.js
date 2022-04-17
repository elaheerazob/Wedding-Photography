import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Home/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import ServicesDetail from './Pages/Home/ServicesDetail/ServicesDetail';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import RequireAuth from './Pages/Share/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/checkout' element=
        {<RequireAuth>
          {<Checkout/>}
        </RequireAuth>}
        ></Route>
        <Route path='/service/:serviceId' element={<ServicesDetail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
