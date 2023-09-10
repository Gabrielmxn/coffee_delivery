import { Bairro, CEPInput, CEPLabel, CheckoutContent, City, CoffeeSelectionCart, Complements, CountButtons, Counter, FormCheckout, FormularioEndereco, Info, Informations, ItemComplement, ItemsCoffees, LinhaHorizontal, NumberInput, Price, RUAInput, SelectionCoffees, Uf } from "./styles";
import {  Minus, Plus } from "@phosphor-icons/react";


export function Checkout(){
  return(
    <CheckoutContent>
      <FormularioEndereco>
      <h2>Complete seu pedido</h2>
      <div>
        <span>Endereço de Entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <FormCheckout action="">
          <CEPInput >
            <input type="text" name="" id="" placeholder="CEP"/>
            
          </CEPInput>
          <RUAInput>
            <input type="text" name="cep" id="cep" placeholder="Rua" />
            
          </RUAInput>
          <Informations>
            <NumberInput>
              <input type="text" name="cep" id="cep"  placeholder="Número"/>
            </NumberInput>
            <Complements>
              <input type="text" name="cep" id="cep"  placeholder="Complemento"/>
              <span>Opicional</span>
            </Complements>
            
          </Informations>
          <Info>
            <Bairro>
              <input type="text" name="cep" id="cep"  placeholder="Bairro"/>
            </Bairro>
            <City>
              <input type="text" name="cep" id="cep" placeholder="Cidade"/>
            </City>
            <Uf>
              <input type="text" name="cep" id="cep" placeholder="UF"/>
            </Uf>
          </Info>

        </FormCheckout>
      </div>
      </FormularioEndereco>
      <CoffeeSelectionCart>
        <h3>Cafés selecionados</h3>
        <SelectionCoffees>
          <ItemComplement>
            <ItemsCoffees>
              <img src="http://localhost:5173/expressotradicional.svg" alt="" />
              <div>
                <h2>Expresso Tradicional</h2>
                <Counter>
                  <CountButtons>
                    <Minus />
                  </CountButtons>
                  <span>{1}</span>
                  <CountButtons>
                    <Plus />
                </CountButtons>
              </Counter>
              </div>
              
            </ItemsCoffees>
            <Price>R$ 9.44</Price>
          </ItemComplement>
          <LinhaHorizontal />
          <ItemComplement>
            <ItemsCoffees>
              <img src="http://localhost:5173/expressotradicional.svg" alt="" />
              <div>
                <h2>Expresso Tradicional</h2>
                <Counter>
                  <CountButtons>
                    <Minus />
                  </CountButtons>
                  <span>{1}</span>
                  <CountButtons>
                    <Plus />
                </CountButtons>
              </Counter>
              </div>
              
            </ItemsCoffees>
            <Price>R$ 9.44</Price>
          </ItemComplement>
          <LinhaHorizontal />
          <ItemComplement>
            <ItemsCoffees>
              <img src="http://localhost:5173/expressotradicional.svg" alt="" />
              <div>
                <h2>Expresso Tradicional</h2>
                <Counter>
                  <CountButtons>
                    <Minus />
                  </CountButtons>
                  <span>{1}</span>
                  <CountButtons>
                    <Plus />
                </CountButtons>
              </Counter>
              </div>
              
            </ItemsCoffees>
            <Price>R$ 9.44</Price>
          </ItemComplement>
          <LinhaHorizontal />
          
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