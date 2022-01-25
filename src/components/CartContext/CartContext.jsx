//creacion del contexto
import React, {createContext, useState } from "react";

export const CartContext = createContext([])

//creacion del componente que maneja el contexto

export const CartContextProvider = ({children}) =>{
    //estados y funciones
    const [cartList, setCartList] = useState([])
    
    function addCart(items){
        
        const index = cartList.findIndex(prod => prod.id === items.id)
        
         if(index > -1){
            const cantAnt = cartList[index].cantidad
            let cantNueva = cantAnt + items.cantidad
            cartList[index].cantidad = cantNueva
            let array = [...cartList]
            setCartList(array)
        }else {
            setCartList([...cartList, items])
        }

    }
    function vaciarCarrito () {
        setCartList([])
    }
    function borrarItem(item){

        const index = cartList.findIndex(prod => prod.id === item.id)
        console.log(index)
        cartList.splice(index, 1)
        let array = [...cartList]
        setCartList(array)
        

    }
    function total(){
        let suma = cartList.reduce((acum, valor)=> (acum + (valor.cantidad*valor.precio)),0)
        return (suma)}

    function carritoVacio(){
        
        if(cartList.length===0){
            return (true)
        }else{
            return(false)
        }
    }
    function totalItems(){
        let total= cartList.reduce((acum, prod)=>acum + prod.cantidad, 0 )
       return(total)
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            vaciarCarrito,
            borrarItem,
            total,
            carritoVacio,
            totalItems
        }
            
        }>
            {children}
        </CartContext.Provider>
    )
}