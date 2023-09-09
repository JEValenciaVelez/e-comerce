//creamos un contexto global ,  que sera el estado global de la app
import { createContext, useState } from "react";

//instanciamos el modulo crateContext para utilizarlo, en esta variable guardamos el contexto creado
export const contextShoppingCart = createContext();

//cramos componente encargado de proveer el estado global, este componente recibe otros componentes
export const ContextProvider = ({children}) => {

    //creo estado global para el contador de carrito de compras, q luego los pasamos al componente global provider 
    const [count, setCount] = useState(0);
    //creo estado para la data de product detail que por defecto estara en false para no mostrarlo
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);

    //creo estado donde guardo la data de cada card 
    const [ detailCard, setDetailCard ] = useState({});

    //creo funcion q se encarga de setear el estado del isOpenProductDetail
    const openProductDetail = () =>  setIsOpenProductDetail(true);
    const closeProductDetail = () => setIsOpenProductDetail(false);
    

    return(
        <contextShoppingCart.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            detailCard,
            setDetailCard
        }}>
             {children}
        </contextShoppingCart.Provider>
       
    )
}