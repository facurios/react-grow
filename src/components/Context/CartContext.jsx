import { createContext, useState, useContext} from "react";


const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function totalItems(){
    
        const totalProductos=cartList.map(productosCart=>productosCart.cantidad).reduce((prev,curr) => prev+curr,0)
               
    return totalProductos
    }

    function total(){

        const totalPrecio =cartList.map(totalCart=>totalCart.cantidad*totalCart.precio).reduce((prev,curr)=> prev+curr,0)

    return totalPrecio
    }
    
    function addCart(items) {
        
        const indice=cartList.findIndex(i => i.id === items.id)
       
        if (indice > -1){
            const qtyVieja=cartList[indice].qty
            let qtyNueva= qtyVieja + items.qty
            cartList[indice].qty=qtyNueva
            let arrAux = [...cartList]
            setCartList(arrAux)

        }else{
            setCartList([...cartList, items])
        }
    }


    function vaciarCarrito(){
        setCartList([])
    }

    function borrarItem(itemId){
        const index = cartList.findIndex(prod => prod.id === itemId)
        console.log(index)
        cartList.splice(index, 1)
        let array = [...cartList]
        setCartList(array)
    }

    
    return(
        <CartContext.Provider value ={{
            cartList,
            addCart,
            borrarItem,
            vaciarCarrito,
            total,
            totalItems,
            }}
     > 
     {children}
     </CartContext.Provider>
    )
}