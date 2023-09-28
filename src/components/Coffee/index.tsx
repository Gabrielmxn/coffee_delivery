
import { coffeeList } from "../../utils/coffeesList";
import { CardCoffee } from "./components/CardCoffees";
import { Cards, Main } from "./styles";
import { useState, useEffect } from 'react'

interface ItemsCoffeeType {
  id: string
  img: string
  title: string
  description: string
  ingredientes: string[]
  price: number
}



export function CoffeeMain(){
  const [items, setItems] = useState<ItemsCoffeeType[]>([])
  useEffect(() => {
    const storageCoffeeItems = localStorage.getItem("items_coffee");
    if(storageCoffeeItems === null){
      localStorage.setItem("items_coffee", JSON.stringify({
        coffeeList
      }))
      setItems(coffeeList)
      console.log('dentro do if')
      return
    }
    console.log('fora do if')
    setItems(JSON.parse(storageCoffeeItems).coffeeList)
  }, [])
  return(
    <Main>
      <h1>Nosso Cafés</h1>
      <Cards>
        {items.map(resp => {
          return(
            <CardCoffee
            key={resp.id}
            id={resp.id}
            imagem={resp.img}
            title={resp.title}
            description={resp.description}
            ingredientes={resp.ingredientes}
            price={resp.price}
          />
          )
        })}
        
        
      </Cards>
       
    </Main>
  )
}