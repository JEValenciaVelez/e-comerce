

import {Routes, Route} from 'react-router-dom';


import { Home } from './pages/Home/Index';
import { MyAccount } from './pages/MyAccount/Index';
import { MyOrder } from './pages/MyOrder';
import { MyOrders } from './pages/MyOrders';
import { SingIn } from './pages/SingIn';

import './App.css'
import { NotFound } from './pages/NotFound';




function App() {
  

  return (
    <>

    <Routes>

      <Route path='/' element= {<Home />} />
      <Route path='/my-account' element= {<MyAccount />} />
      <Route path='/my-order' element= {<MyOrder />} />
      <Route path='/my-orders' element= {<MyOrders/>} />
      <Route path='/sign-in' element= {< SingIn />} />
      <Route path='/*' element= {<NotFound />} />

    </Routes>
       
    </>
  )
}

export default App
