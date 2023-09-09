//creamos un contexto global ,  que sera el estado global de la app
import { createContext, useState } from "react";

//instanciamos el modulo crateContext para utilizarlo, en esta variable guardamos el contexto creado
export const contextShoppingCart = createContext();

//cramos componente encargado de proveer el estado global, este componente recibe otros componentes
export const ContextProvider = ({children}) => {

    //creo estado global para el carrito de compras, q luego los pasamos al componente global provider 
    const [count, setCount] = useState(0);
    console.log('estado count en el context global -> ',count)

    return(
        <contextShoppingCart.Provider value={{
            count,
            setCount
        }}>
             {children}
        </contextShoppingCart.Provider>
       
    )
}