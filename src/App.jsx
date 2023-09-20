

import {Routes, Route} from 'react-router-dom';


import { Home } from './pages/Home';
import { MyAccount } from './pages/MyAccount/Index';
import { MyOrder } from './pages/MyOrder';
import { MyOrders } from './pages/MyOrders';
import { SingIn } from './pages/SingIn';

import './App.css'
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar';
import Clothes from './pages/Clothes';
import Electronics from './pages/Electronics';
import Furnitures from './pages/Furnitures';




function App() {
  

  return (
    <>

    <NavBar />
    <Routes>

      <Route path='/' element= {<Home />} />
      <Route path='/my-account' element= {<MyAccount />} />
      <Route path='/my-order' element= {<MyOrder />} />
      <Route path='/my-orders' element= {<MyOrders />} />
      <Route path='/my-orders/last' element= {<MyOrder />} />
      <Route path='/clothes' element= {<Clothes />} />
      <Route path='/electronics' element= {<Electronics />} />
      <Route path='/furnitures' element= {<Furnitures />} />
      <Route path='/my-orders/:id' element= {<MyOrder />} />
      <Route path='/sign-in' element= {< SingIn />} />
      <Route path='/*' element= {<NotFound />} />

    </Routes>
       
    </>
  )
}

export default App
