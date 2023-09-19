import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react';

import { contextShoppingCart } from '../../context';
import OrderCard from '../OrderCard/index';
import { totalPrice } from '../../utils';

import './styles.css';
import { Link } from 'react-router-dom';


export const CheckoutSideMenu = () => {

    const context = useContext(contextShoppingCart);
    // console.log('Carro de compras : ',context.cartProducts)

    const handleDelete = (id) => {
        const filteredProducts =  context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1)
    }


    const handleCheckout = () => {

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;  // Suma 1 porque los meses comienzan en 0 (enero) en JavaScript
        const day = date.getDate();  

        const orderToAdd = {
            date: `${day}/${month}/${year}`,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        };

        context.setOrder([
            ...context.order,
            orderToAdd
        ]);

        context.setCartProducts([]);
        context.setCount(0);
    };
    

    return(
        <aside className={` ${context.isCheckoutSideMenu ? 'flex' : 'hidden' } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-medium text-xl'> My order </h2>
                <div>
                    <XMarkIcon 
                    onClick={context.closeCheckoutSideMenu} 
                    className='h-6 w-6 text-black cursor-pointer' 
                    />
                </div>
            </div>

            <div className="px-6 overflow-scroll flex-1 ">

            {
                context.cartProducts.map((product) => (
                    <OrderCard
                    id={product.id}
                    key= {product.id}  
                    title={product.title} 
                    imageUrl = {product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }

            </div>
            <div className="px-6" >
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light"> Total </span>
                    <span className="font-medium text-2xl"> $ {totalPrice(context.cartProducts)} </span>
                </p>

                <Link to={`/my-orders/last`}>

                  <button  
                  onClick={handleCheckout}
                  className='w-full bg-black py-3 text-white rounded-lg mb-6'
                  >
                      Checkout 
                  </button>

                </Link>
                
            </div>
           
        </aside>
    )
}