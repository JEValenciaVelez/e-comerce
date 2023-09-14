import {useContext}  from 'react';

import { Layout } from "../../components/Layout";
import {contextShoppingCart}  from '../../context';
import OrderCard from '../../components/OrderCard';



export const MyOrder = () => {

    const context = useContext(contextShoppingCart);
    const lastOrder = context.order?.slice(-1)[0].products ;

    return (
        <Layout>
            <h2>My Order Works</h2>
            <div className="px-6 overflow-scroll flex-1 ">

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