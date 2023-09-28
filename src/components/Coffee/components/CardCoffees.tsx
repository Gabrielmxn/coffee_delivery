import { ShoppingCart, Minus, Plus } from "@phosphor-icons/react";
import { Actions, Card, CardFooter, CartButtons, CountButtons, Counter, Ingredients, Price } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/ProviderCart";
import { NotificationAddCoffeeStore } from "../../NotificationAddCoffeeStore";

interface CardCoffeeProps {
  id: string
  imagem: string
  ingredientes: string[],
  title: string
  description: string
  price: number
}

export function CardCoffee({
  id,
  imagem,
  ingredientes,
  title,
  description,
  price
}: CardCoffeeProps){
  const [count, setCount] = useState(1)
  const [notificationActive, setNotificationActive] = useState(false)
  const { handleAddItems } = useContext(CartContext)

  function handleSetCountCart(add: string){

    if(add === 'adiciona'){
      setCount(state => state + 1)
    }else{
      count > 1 && setCount(state => state - 1) 
    }
    
  }

  function handleSetItemCart(){
    const item = {
      id,
      title,
      url: imagem,
      count,
      price
    }

    localStorage.setItem('coffee_delivery_item', JSON.stringify(item))
    handleAddItems(item)
    setNotificationActive(true)
    setTimeout(() => {
      setNotificationActive(false)
    }, 2000)
  }
  return(
    <Card>
       <img src={imagem} alt="" />
        <Ingredients>
          {ingredientes.map(response => {
            return(
              <span key={response}>{response.toLocaleUpperCase()}</span>
            )
          })}
        </Ingredients>
        <h3>{title}</h3>
        <p>{description}</p>
        <CardFooter>
          <Price>
            <span>R$ </span>
            <span>{price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
          </Price>
          <Actions>
            <Counter>
              <CountButtons onClick={() => handleSetCountCart('subtrai')}>
                <Minus />
              </CountButtons>
              <span>{count}</span>
              <CountButtons onClick={() => handleSetCountCart('adiciona')}>
                <Plus />
              </CountButtons>
            </Counter>
            <CartButtons onClick={handleSetItemCart}>
              <ShoppingCart size={22} weight="fill"/>
            </CartButtons>
          </Actions>
          </CardFooter>
          {notificationActive && <NotificationAddCoffeeStore />}
    </Card>
  )
}