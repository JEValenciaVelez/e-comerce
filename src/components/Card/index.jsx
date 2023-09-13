import { useContext } from "react" ;

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { contextShoppingCart } from "../../context";



export const Card = ({data}) => {

    const context = useContext(contextShoppingCart);

    const showProduct = (product) => {
        context.openProductDetail();
        context.setDetailCard(product);
    };

    const addProduct = (event, product) => {
        event.stopPropagation();
        context.setCartProducts([
            ...context.cartProducts,
            product
        ]);

        context.setCount(context.count+1);
        context. openCheckoutSideMenu();
        context.closeProductDetail();
        console.log('en el carrito -> ', context.cartProducts)
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0 ;

        if(isInCart){
            return (
                <div 
                className="absolute top-0  m-2 p-1 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full"
                >
                     <CheckIcon 
                     className='h-6 w-6 text-white' 
                     />
                </div>
            )
        }else{
            return (
                <div 
                className="absolute top-0  m-2 p-1 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
                onClick={(event) => addProduct(event, data)}
                >
                     <PlusIcon 
                     className='h-6 w-6 text-black' 
                     />
                </div>
            )
        }

    }


    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg "
        onClick={ () => showProduct(data) }
        >
            <figure className="relative mb-2 w-full h-4/5"> 
                <span className="absolute  px-3 py-0.5 bottom-0 left-0 m-2  bg-white/60 text-black text-xs rounded-lg "> {data.category.name} </span>
                <img  className="w-full h-full object-cover rounded-lg"  src= {data.images[0]} alt="imagen" />
               
               {renderIcon(data.id)}

            </figure>

            <p className="flex justify-between">
                    <span className="text-sm font-light  "> {data.title} </span>
                    <span className="text-lg font-medium"> ${data.price} </span>
            </p>
        </div>
    )
}