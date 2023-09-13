import { XMarkIcon } from '@heroicons/react/24/solid'


import { useContext } from 'react';
import { contextShoppingCart } from '../../context';

import './styles.css';


export const ProductDetail = () => {

    const context = useContext(contextShoppingCart);
    

    return(
        <aside className={` ${context.isOpenProductDetail ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-medium text-xl'> Detail </h2>
                <div>
                    <XMarkIcon 
                    onClick={context.closeProductDetail} 
                    className='h-6 w-6 text-black cursor-pointer' 
                    />
                </div>
                <figure className='px-6'>
                    <img 
                    src={context.detailCard.images ? context.detailCard.images : '' } 
                    alt={context.detailCard.title} 
                    className=' w-full h-full rounded-lg '
                    />
                    <p className='flex flex-col p-6'>
                        <span className='font-medium text-2xl mb-2' > $ {context.detailCard.price} </span>
                        <span className='font-medium text-md' > $ {context.detailCard.title} </span>
                        <span className='font-light text-sm'> $ {context.detailCard.description} </span>
                    </p>
                </figure>
            </div>
        </aside>
    )
}