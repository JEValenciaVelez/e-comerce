import {NavLink} from 'react-router-dom';
import { useContext} from 'react'; 

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { contextShoppingCart } from '../../context';


export const NavBar = () => {
    
    const context = useContext(contextShoppingCart)
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                  <NavLink 
                  to={`/`} 
                  >
                    Shopi
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/`} 
                   className={({ isActive }) => isActive ? activeStyle : undefined }
                  >
                    All
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/clothes`} 
                  onClick={()=>context.setSearchByCategory('Clothes')}
                   className= {({ isActive }) => isActive ? activeStyle : undefined }
                  >
                    Clothes
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/Electronics`} 
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                   onClick={()=>context.setSearchByCategory('electronics')}
                  >
                    Electronics
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/furnitures`} 
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                   onClick={()=>context.setSearchByCategory('furnitures')}
                  >
                    Furnitures
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/toys`} 
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                   onClick={()=>context.setSearchByCategory('toys')}
                  >
                    Toys
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/others`}
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                   onAbort={()=>context.setSearchByCategory('others')}
                  >
                    Others
                  </NavLink>   
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                  juancho@mail.com 
                </li>
                <li>
                  <NavLink to={`/my-orders`}
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                  >
                    My orders
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/my-account`}
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                  >
                    My Account
                  </NavLink>   
                </li>
                <li>
                  <NavLink to={`/sing-in`} 
                   className={({ isActive}) => isActive ? activeStyle : undefined }
                  >
                    Sign in
                  </NavLink>   
                </li>
                <li className='flex items-center'>
                  <ShoppingCartIcon className='h-6 w-6 text-black' />
                  <div>
                  {context.count}
                  </div>
                </li>
            </ul>
        </nav>
    )
}