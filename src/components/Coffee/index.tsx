
import { coffeeList } from "../../utils/coffeesList";
import { CardCoffee } from "./components/CardCoffees";
import { Cards, Main } from "./styles";

export function CoffeeMain(){
  return(
    <Main>
      <h1>Nosso Cafés</h1>
      <Cards>
        {coffeeList.map(resp => {
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