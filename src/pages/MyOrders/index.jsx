//componente de lista de ordenes
import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Layout } from "../../components/Layout"
import OrdersCard from "../../components/OrdersCard"
import { contextShoppingCart } from '../../context';


export const MyOrders = () => {

    const context = useContext(contextShoppingCart);
    console.log('ordenes en el estado global-> ',context.order)

    return (
        <Layout>

            <div className='flex  relative justify-center w-80'>

                <h1 className='font-medium text-xl mb-4'> My orders </h1>
            </div>
    
            {
                context.order.map((order, index) =>(
                    <Link key={index} to={`/my-orders/${index}`}>
                     <OrdersCard
                     totalPrice={order.totalPrice}
                     totalProducts={order.totalProducts}
                    />
                    </Link>
                ))
            }

        </Layout>
    )
}