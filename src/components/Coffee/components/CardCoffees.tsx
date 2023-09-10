import { ShoppingCart, Minus, Plus } from "@phosphor-icons/react";
import { Actions, Card, CardFooter, CartButtons, CountButtons, Counter, Ingredients, Price } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/ProviderCart";

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
    console.log("ok")
    handleAddItems(item)
  }
  return(
    <Card>
       <img src={imagem} alt="" />
        <Ingredients>
          {ingredientes.map(response => {
            return(
              <span>{response.toLocaleUpperCase()}</span>
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
    </Card>
  )
}