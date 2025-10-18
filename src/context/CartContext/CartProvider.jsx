import { useState } from "react";
import { children } from "react"
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const exists = (id) => {
            const exists = cart.some((p) => p.id === id)
            return exists}

    
    const addItem = (item) => {
        if (exists (item.id)){
            alert ("El producto ya existe")
            return;
        }
        

        setCart([...cart, item]);
        alert(`${item.name} agregado`)
        
    };

    const clearCart = () => {
        setCart([])
    };

    const getTotalItems = () => {
        if (cart.length){
            return cart.length;
        }
    };


    const values = {cart, addItem, clearCart, getTotalItems};

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
};