//componente de lista de ordenes
import { useContext } from 'react'

import { Layout } from "../../components/Layout"
import OrdersCard from "../../components/OredersCard"


export const MyOrders = () => {

    const context = useContext(contextShoppingCart);

    return (
        <Layout>
            <h2>My orders Works</h2>
            <OrdersCard />
        </Layout>
    )
}