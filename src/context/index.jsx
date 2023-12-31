//creamos un contexto global ,  que sera el estado global de la app
import { data } from "autoprefixer";
import { createContext, useState, useEffect } from "react";

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

    //estado para guardar la data de cada order del carrito de compras
    const [order, setOrder] = useState([]);

       //get products
    const [items, setItems] = useState(null);
    console.log(items)
    const [filteredItems, setFilteredItems] = useState([])
    console.log('Items filtrados -> ',filteredItems)
    const [searchByTitle, setSearchByTitle] = useState('')

    const [searchByCategory, setSearchByCategory] = useState(null)

    const filterByTitle = (items=[], title) => {
        return items?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()) )
    }

    const filterByCategory = (items=[], category) => {
        console.log('items : ', items)
        return items?.filter(item => item.category.name.toLowerCase().includes(category.toLowerCase()) )
    }

    useEffect(()=>{
        if(searchByTitle) setFilteredItems(filterByTitle(items, searchByTitle))
        if(searchByCategory) setFilteredItems(filterByCategory(items, searchByCategory))
    },[items,searchByTitle,searchByCategory])

    console.log('items filtrados -> ', filteredItems)

    useEffect(()=>{
        
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.log(error));
        
    },[]);
   

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
            order, 
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
             {children}

        </contextShoppingCart.Provider>
       
    )
}