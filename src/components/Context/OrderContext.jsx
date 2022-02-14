import { createContext, useState, useContext } from "react"

const OrdenContext = createContext([])

export function useOrdenContext() {
    return useContext(OrdenContext)
}

export const OrdenContextProvider = ({ children }) => {

    const [orderBuy, setOrderBuy] = useState({})

    function newOrder(dataForm) {
        setOrderBuy(dataForm)
    }
    return (<OrdenContext.Provider value={{
        orderBuy,
        newOrder,
    }}
    >
        {children}
    </OrdenContext.Provider>
    )
}