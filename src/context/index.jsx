//creamos un contexto global ,  que sera el estado global de la app
import { createContext, useState } from "react";

//instanciamos el modulo crateContext para utilizarlo, en esta variable guardamos el contexto creado
export const contextShoppingCart = createContext();

//cramos componente encargado de proveer el estado global, este componente recibe otros componentes
export const ContextProvider = ({children}) => {

    //creo estado global para el contador de carrito de compras, q luego los pasamos al componente global provider 
    const [count, setCount] = useState(0);
    
    //creo estado donde guardo la data de cada card 
    const [ detailCard, setDetailCard ] = useState({});

    //creo estado para almacenar los productos del carrito de compras
    const [cartProducts, setCartProducts] = useState([]);

    //creo estado para la data de product detail que por defecto estara en false para no mostrarlo
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);
    //creo funcion q se encarga de setear el estado del isOpenProductDetail
    const openProductDetail = () =>  setIsOpenProductDetail(true);
    const closeProductDetail = () => setIsOpenProductDetail(false);

     
     const [isCheckoutSideMenu, setCheckoutSideMenu] = useState(false);
     const openCheckoutSideMenu = () =>  setCheckoutSideMenu(true);
     const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);
 

    

    return(
        <contextShoppingCart.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            detailCard,
            setDetailCard,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenu,
            setCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
             {children}
        </contextShoppingCart.Provider>
       
    )
}