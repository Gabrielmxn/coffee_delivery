import { createContext, useEffect, useState } from "react";

interface ProviderContextCartProps {
  children: React.ReactNode
}

interface CartContextProps{
  items: CartListProps[]
  handleAddItems: (item: CartListProps) => void;
  handleAdicionarOuSubtrair: (id: string, num: number) => void;
  handleRemoveItem: (id: string) => void;
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
  const [items, setItems] = useState<CartListProps[]>([])

  useEffect(() => {
    const storageItemsStore = localStorage.getItem('coffee_delivery_item')
    if(storageItemsStore !== null){
      const coffeeInStoreCache = JSON.parse(storageItemsStore) as CartListProps[]
      setItems(coffeeInStoreCache)
    }
  }, [])
  function handleRemoveItem(id: string){
    const store = items.filter(response => response.id !== id)

    setItems(store)
    localStorage.setItem("coffee_delivery_item", JSON.stringify(store))
  }
  function handleAddItems(item: CartListProps){
    const store = items.filter(response => response.id !== item.id)

   
    store.push(item)
    setItems(store)
    localStorage.setItem("coffee_delivery_item", JSON.stringify(store))
  }

  function handleAdicionarOuSubtrair(id: string, num: number){
    const index = items.findIndex(response => response.id === id);
    const itemsNew = items.slice(0, items.length)

    if(index === -1){
      console.log('item não encontrado')
      return;
    }
    
      if(num > 0){
        itemsNew[index].count =  itemsNew[index].count + 1
        console.log(items)
        setItems(itemsNew)
        localStorage.setItem("coffee_delivery_item", JSON.stringify(itemsNew))
      }else if(num < 0 &&  itemsNew[index].count > 1){
        itemsNew[index].count =  itemsNew[index].count - 1
      
        setItems(itemsNew)
        localStorage.setItem("coffee_delivery_item", JSON.stringify(itemsNew))
      }
    }
    
   
  
  
  
  return(
    <CartContext.Provider value={{items, handleAddItems, handleAdicionarOuSubtrair, handleRemoveItem}}>
      {children}
    </CartContext.Provider>
  )
}