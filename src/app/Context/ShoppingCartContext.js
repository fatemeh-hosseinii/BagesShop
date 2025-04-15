"use client"
const { createContext, useState, useContext } = require("react");

const ShoppingCartContext=createContext({})

export const useShoppingCart = () => {
    return (
        useContext(ShoppingCartContext)
    )
}

export function ShoppingCartContextProvider ({children}){
    const[CartItem,SetCartItem]=useState([])
    const HandleIncreaceProductQty= (id)=>{
        SetCartItem(curentitem=>{
            const isnotproductexist=CartItem.find((item)=>item.id==id)==null
            if(isnotproductexist){
                return (
                    [...curentitem,{id:id,qty:1}]
                )
            }
            else {
                return curentitem.map((elem)=>{
                    if(elem.id==id){
                        return {...elem,qty:elem.qty+1}
                    }else{
                        return elem
                    }
                })
            }
        })
    }
    return (
        <ShoppingCartContext.Provider value={{CartItem,HandleIncreaceProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}