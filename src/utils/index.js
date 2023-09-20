
/**
 * this function calculate total price of a new order
 * @param {Array} cartProducts cartProducts: Array of objects
 * @returns {number}
 */
export const totalPrice = (cartProducts=[]) => {

    let totalPrice = 0 ;

    // if(cartProducts.length > 0){
    //     for(let i = 0 ; i < cartProducts.length ; i++){
    //         totalPrice += cartProducts[i].price;
    //     }
    
    //     return totalPrice ;
    // }else{
    //     return cartProducts.length;
    // }

    cartProducts.forEach(product => totalPrice += product.price);
    return totalPrice;
    
}

// console.log(totalPrice([{id: 11, title: 'new title', price: 1000},{id: 11, title: 'new title', price: 1000}]));
// console.log(totalPrice([]));

const string = 'juan'
console.log()
