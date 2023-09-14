import {useState, useEffect} from 'react'

import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/NavBar"
import { ProductDetail } from '../../components/ProductDetail'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'


export const Home = () => {

    const [items, setItems] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.log(error));
    },[]);

    console.log('Estos son los items de la api ->',items)

    return (
        <Layout>
            {/* <NavBar /> */}
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