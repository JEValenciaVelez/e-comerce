//componente de lista de ordenes
import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Layout } from "../../components/Layout"
import OrdersCard from "../../components/OredersCard"
import { contextShoppingCart } from '../../context';


export const MyOrders = () => {

    const context = useContext(contextShoppingCart);

    return (
        <Layout>

            <div className='flex  relative justify-center w-80'>

                <h1>My orders </h1>
            </div>
    
            {
                context.order.map((order, index) =>(
                    <Link key={index} to={`/my-orders/${order.id}`}>
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