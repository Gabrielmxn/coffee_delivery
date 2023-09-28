import { useContext, useEffect, useState } from "react";
import { ButtonConfirmarPedido, CheckoutContent, CoffeeSelectionCart, ComplementsOrder, ContainerChange, ContainerFooter, ContainerPagamento, ContainerTypePagament, ContentHeaderAddress, CountButtons, Counter, DetalhesItens, FormularioCompletarPedido, FormularioEndereco, HeaderFooterPagamento, Item, ItemComplement, ItemsCoffees, LinhaHorizontal,  Price, Remover, SelectionCoffees, TitleAndInformation, TitleCompletOrder, TypePagament, } from "./styles";
import {  Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { CartContext } from "../contexts/ProviderCart";
import { FormAddress } from "../components/FormAddress";
import { formatBRL } from "../utils/formatBRL";
import { TitleComponent } from "../components/TitleComponent";


const frete = 3.5;
export function Checkout(){
  
  const { items, handleAdicionarOuSubtrair, handleRemoveItem} = useContext(CartContext)
  const [buttonClick, setButtonClick] = useState('')
  
  useEffect(() => {

  }, [items])

  function handleButtonActive(typePagement: string){
    setButtonClick(typePagement)
  }

  const totalItems = items.reduce((acc, item) => acc + (item.price * item.count), 0)
  return(
    <>
      <TitleComponent title="Checkout"/>
      <CheckoutContent>
        <FormularioEndereco>
          <TitleCompletOrder>Complete seu pedido</TitleCompletOrder>
          <FormularioCompletarPedido>
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
        <ContainerFooter>
          <ContainerPagamento>
            <CurrencyDollar size={22}/>
              <HeaderFooterPagamento>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </HeaderFooterPagamento>
          </ContainerPagamento>
          <ContainerTypePagament >
            <TypePagament 
              className={buttonClick === 'Cartão de crédito' ?  'active' : '' }
              onClick={() => handleButtonActive('Cartão de crédito')}
            >
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </TypePagament>
            <TypePagament 
              className={buttonClick === 'Cartão de débito' ?  'active' : '' }
              onClick={() => handleButtonActive('Cartão de débito')}
            >
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </TypePagament>
            <TypePagament 
              className={buttonClick === 'Dinheiro' ?  'active' : '' }
              onClick={() => handleButtonActive('Dinheiro')}
            >
              <Money size={16} />
              <span>DINHEIRO</span>
            </TypePagament>
          </ContainerTypePagament>
          </ContainerFooter>
          </FormularioCompletarPedido>
        </FormularioEndereco>
        
        <CoffeeSelectionCart>
          <TitleCompletOrder>Cafés selecionados</TitleCompletOrder>
          <SelectionCoffees>
            {items.map(resp => {
              return(
                <>
                <ItemComplement key={resp.id}>
                <ItemsCoffees>
                  <img src={resp.url} alt="" />
                  <div>
                    <h2>{resp.title}</h2>
                    <ContainerChange>
                      <Counter>
                        <CountButtons onClick={() => handleAdicionarOuSubtrair(resp.id, -1)}>
                          <Minus />
                        </CountButtons>
                        <span>{resp.count}</span>
                        <CountButtons onClick={() => handleAdicionarOuSubtrair(resp.id, 1)}>
                          <Plus />
                        </CountButtons>
                      </Counter>
                      <Remover onClick={() => handleRemoveItem(resp.id)}>
                        <Trash size={16} />
                        <span>Remover</span> 
                      </Remover>
                    </ContainerChange>
                  </div>
                  
                </ItemsCoffees>
                <Price>{formatBRL.format(resp.price * resp.count)}</Price>
              </ItemComplement>
              <LinhaHorizontal />
                </>
              )
            })}          
            <DetalhesItens>
              <Item>
                <span>Total de itens</span>
                <span>{formatBRL.format(totalItems)}</span>
              </Item>
              <Item>
                <span>Entrega</span>
                <span>{formatBRL.format(frete)}</span>
              </Item>
              <Item>
                <span>Total</span>
                <span>{formatBRL.format(totalItems + frete)}</span>
              </Item>
            </DetalhesItens>
            <ButtonConfirmarPedido>
              CONFIRMAR PEDIDO
            </ButtonConfirmarPedido>
          </SelectionCoffees>
        </CoffeeSelectionCart>
      </CheckoutContent>
    </>
  )
}
