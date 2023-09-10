import axios from "axios";
import { useState} from 'react';
import { Bairro, CEPInput, City, Complements, FormCheckout, Info, Informations, NumberInput, RUAInput, Uf } from "./styles";

/**
 * bairro
: 
"Penha Circular"
cep
: 
"21215-240"
complemento
: 
""
ddd
: 
"21"
gia
: 
""
ibge
: 
"3304557"
localidade
: 
"Rio de Janeiro"
logradouro
: 
"Rua Ibicuí"
siafi
: 
"6001"
uf
: 
"RJ"
 */

interface AddressProps {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}

export function FormAddress(){
  const [address, setAddress] = useState<AddressProps>({} as AddressProps)
  async function getAddress(event: React.ChangeEvent<HTMLInputElement>){
    if(event.target.value.length !== 8){
      console.log('CEP INVALIDO')
      return
    }
    const { data } = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`)
    setAddress(data)
  }

  return(
    <FormCheckout action="">
          <CEPInput >
            <input type="text" name="" id="" placeholder="CEP" onChange={getAddress}/>
            
          </CEPInput>
          <RUAInput>
            <input type="text" name="cep" id="cep" placeholder="Rua" value={address && address.logradouro}/>
            
          </RUAInput>
          <Informations>
            <NumberInput>
              <input type="text" name="cep" id="cep"  placeholder="Número"/>
            </NumberInput>
            <Complements>
              <input type="text" name="cep" id="cep"  placeholder="Complemento" />
              <span>Opicional</span>
            </Complements>
            
          </Informations>
          <Info>
            <Bairro>
              <input type="text" name="cep" id="cep"  placeholder="Bairro" value={address && address.bairro}/>
            </Bairro>
            <City>
              <input type="text" name="cep" id="cep" placeholder="Cidade" value={address && address.localidade}/>
            </City>
            <Uf>
              <input type="text" name="cep" id="cep" placeholder="UF" value={address.uf}/>
            </Uf>
          </Info>

        </FormCheckout>
  )
}