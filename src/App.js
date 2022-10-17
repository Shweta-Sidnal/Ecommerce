import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Provider } from "react-redux";
import store from './Redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skincare from './Components/skincare';
import Contact from './Components/Contact';
import Smartphones from './Components/Smartphones';
import Fragrances from './Components/Frangrances';
import Women from './Components/Women';
import Men from './Components/Men';
import Menshoes from './Components/Menshoes';
import Womenshoes from './Components/Womenshoes';
import Laptop from './Components/Laptop';
import Homedecoration from './Components/Homedecoration';
import Sunglasses from './Components/Sunglasses';
import Cart from './Cart/Cart';
import Search from './Components/Search';
import All from './Components/All';
import Login from './Components/Login';
import Register from './Components/Register';
import Images from './Components/Images';
import Notfound from './Components/Notfound';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/All' element={<All />} />
            <Route path='/skincare' element={<Skincare />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Smartphones' element={<Smartphones />} />
            <Route path='/Fragrances' element={<Fragrances />} />
            <Route path='/Women' element={<Women />} />
            <Route path='/Womenshoes' element={<Womenshoes />} />
            <Route path='/Men' element={<Men />} />
            <Route path='/Menshoes' element={<Menshoes />} />
            <Route path='/Laptop' element={<Laptop />} />
            <Route path='/Homedecoration' element={<Homedecoration />} />
            <Route path='/Sunglasses' element={<Sunglasses />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Images' element={<Images />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </BrowserRouter>




      </div>
    </Provider>
  );
}

export default App;
