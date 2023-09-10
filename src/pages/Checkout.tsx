import { useContext } from "react";
import { CheckoutContent, CoffeeSelectionCart, ComplementsOrder, ContentHeaderAddress, CountButtons, Counter, FormularioEndereco, ItemComplement, ItemsCoffees, LinhaHorizontal,  Price, SelectionCoffees, TitleAndInformation, TitleCompletOrder, } from "./styles";
import {  Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Minus, Money, Plus } from "@phosphor-icons/react";
import { CartContext } from "../contexts/ProviderCart";
import { FormAddress } from "../components/FormAddress";


export function Checkout(){
  const { items} = useContext(CartContext)
  return(
    <CheckoutContent>
      <FormularioEndereco>
        <TitleCompletOrder>Complete seu pedido</TitleCompletOrder>
        <ComplementsOrder>
          <ContentHeaderAddress>
            <MapPinLine size={22}  />
            <TitleAndInformation>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleAndInformation>
          </ContentHeaderAddress>
          <FormAddress />
        </ComplementsOrder>
      <div>
         <div>
          <CurrencyDollar size={22}/>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
         </div>
         <div>
          <button>
            <CreditCard size={22} />
            CARTÃO DE CRÉDITO
          </button>
          <button>
            <Bank size={22} />
            CARTÃO DE DÉBITO
          </button>
          <button>
            <Money size={22} />
            DINHEIRO
          </button>
         </div>
        </div>
      </FormularioEndereco>
      <CoffeeSelectionCart>
        <h3>Cafés selecionados</h3>
        <SelectionCoffees>
          {items.map(resp => {
            return(
              <>
              <ItemComplement key={resp.id}>
              <ItemsCoffees>
                <img src={resp.url} alt="" />
                <div>
                  <h2>{resp.title}</h2>
                  <Counter>
                    <CountButtons>
                      <Minus />
                    </CountButtons>
                    <span>{resp.count}</span>
                    <CountButtons>
                      <Plus />
                  </CountButtons>
                </Counter>
                </div>
                
              </ItemsCoffees>
              <Price>R$ {resp.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Price>
            </ItemComplement>
            <LinhaHorizontal />
              </>
            )
          })}          
          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
          <button>
            CONFIRMAR PEDIDO
          </button>
        </SelectionCoffees>
      </CoffeeSelectionCart>
    </CheckoutContent>
  )
}