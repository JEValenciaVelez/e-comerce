import {useContext}  from 'react';
import {Link} from 'react-router-dom'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'


import { Layout } from "../../components/Layout";
import {contextShoppingCart}  from '../../context';
import OrderCard from '../../components/OrderCard';



export const MyOrder = () => {

    const context = useContext(contextShoppingCart);
    const lastOrder = context.order?.slice(-1)[0].products || [];

    return (
        <Layout>
             <div className='flex  relative justify-center w-80 mb-6'>
                <Link to={`/my-orders`}  className='absolute left-0'>
                <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
               
                <h1>My order </h1>
            </div>

            <div className=" flex flex-col w-80 ">

            {
                lastOrder.map((product) => (
                    <OrderCard
                    id={product.id}
                    key= {product.id}  
                    title={product.title} 
                    imageUrl = {product.images}
                    price={product.price}
                    />
                ))
            }


            </div>
        </Layout>
    )
}