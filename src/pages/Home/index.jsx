import {useContext} from 'react'

import {contextShoppingCart} from '../../context'
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { ProductDetail } from '../../components/ProductDetail'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'


export const Home = () => {

    const context = useContext(contextShoppingCart)
    const items = context.items

    const handleChange = (e) => {
        context.setSearchByTitle(e.target.value)
    }

    return (
        <Layout>
            <input 
            className='mb-4 border-black rounded-lg w-80 p-4 focus:outline-none' 
            type="text" 
            onChange={handleChange}
            placeholder='Search a product' />

            <div className=' grid gap-4 grid-cols-3 w-full max-w-screen-lg '>
            {
                items?.map((item)=>(
                    <Card key={item.id} data={item} />
                ))
            }
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
        </Layout>
    )
}