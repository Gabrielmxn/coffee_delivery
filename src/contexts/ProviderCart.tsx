import { createContext, useState } from "react";

interface ProviderContextCartProps {
  children: React.ReactNode
}

interface CartContextProps{
  items: CartListProps[]
  handleAddItems: (item: CartListProps) => void;
}

interface CartListProps {
  id: string
  title: string
  url: string
  count: number
  price: number
}
export const CartContext = createContext<CartContextProps>({} as CartContextProps)

export function ProviderContextCart({ children }: ProviderContextCartProps){


  function handleAddItems(item: CartListProps){
    const itemCart = items.filter(response => response.id !== item.id)

   
    console.log(itemCart)
    itemCart.push(item)
    setItems(itemCart)
  }
  const [items, setItems] = useState<CartListProps[]>([])
  return(
    <CartContext.Provider value={{items, handleAddItems}}>
      {children}
    </CartContext.Provider>
  )
}