"use client"
import { createContext, useState, useContext, useEffect } from "react";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({ children }) {
    const [cartItem, SetCartItem] = useState([]);
      const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }, [favorites]);
    
      const addToFavorites = (product) => {
        setFavorites((prev) => [...prev, product]);
      };
    
      const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
      };
    
      const isFavorite = (id) => {
        return favorites.some((item) => item.id === id);
      };
    const totalqty = cartItem.reduce((totalQty, item) => {
        return totalQty + item.qty;
    }, 0);

    const getproductqty = (id) => {
        return cartItem.find((item) => item.id == id)?.qty || 0;
    };

    const HandleIncreaceProductQty = (id) => {
        SetCartItem((currentItem) => {
            const isNotProductExist = currentItem.find((item) => item.id == id) == null;
            if (isNotProductExist) {
                return [...currentItem, { id: id, qty: 1 }];
            } else {
                return currentItem.map((item) => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const HandleDecreasProductQty = (id) => {
        SetCartItem((currentItem) => {
            const isQtyOne = currentItem.find((item) => item.id == id)?.qty === 1;
            if (isQtyOne) {
                return currentItem.filter((item) => item.id != id);
            } else {
                return currentItem.map((item) => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    const RemoveItem=(id)=>{
        SetCartItem((currentItem)=>{
            return currentItem.filter((item)=>item.id!=id)
        })
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                cartItem,
                HandleIncreaceProductQty,
                HandleDecreasProductQty,
                getproductqty,
                totalqty,
                RemoveItem,
                favorites, addToFavorites, removeFromFavorites, isFavorite
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
