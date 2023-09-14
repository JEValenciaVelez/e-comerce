
import { XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props ;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 ;
    const day = date.getDate();

    return(
        <div className="flex justify-between items-center mb-3 border border-black">

            <p>
                <span> {`${day}/${month}/${year}`} </span>
                <span> {totalProducts} </span>
                <span> {totalPrice} </span>
            </p>

            <p>

            </p>

        </div>
    )
}


export default OrdersCard ;