// componente Layout va a ser un componente encapsulador, este componente sera encargado de encapsular todas las vistas o paginas , y dentro tenga cualquier elemento



export const Layout = ({children}) => {

    return (
        <div className="flex flex-col items-center  mt-20">
            {children}
        </div>
    )
}