import {useContext} from 'react'

import {contextShoppingCart} from '../../context'
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'

const Others = () => {

    const context = useContext(contextShoppingCart)
    const items = context.items
    const filterByCLothes = items?.filter(item => item.category.name === 'Others')

    return(

        <Layout>

            <div className=' grid gap-4 grid-cols-3 w-full max-w-screen-lg '>
                {
                    filterByCLothes?.map((item)=>(
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>

            <CheckoutSideMenu/>


        </Layout>
    )
}

export default Others