import axios from "axios";
import { useContext, useState} from 'react';
import { Bairro, CEPInput, City, Complements, FormCheckout, Info, Informations, NumberInput, RUAInput, Uf } from "./styles";
import { PedidoContext } from "../../contexts/Pedido";

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



export function FormAddress(){
  const {  heandleAddress } = useContext(PedidoContext)
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [uf, setUf] = useState('')
  async function getAddress(event: React.ChangeEvent<HTMLInputElement>){
    if(event.target.value.length !== 8){
      setCep(event.target.value)
      console.log('CEP INVALIDO')
      return
    }

    const { data } = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`)
    
    
    setLogradouro(data.logradouro)
    setBairro(data.bairro)
    setLocalidade(data.localidade)
    setUf(data.uf)
    heandleAddress(data)
  }

  return(
    <FormCheckout action="">
          <CEPInput >
            <input type="text" name="" id="" placeholder="CEP" value={cep} onChange={getAddress} />
            
          </CEPInput>
          <RUAInput>
            <input type="text" name="cep" id="cep" placeholder="Rua" value={logradouro} onChange={(event) => setLogradouro(event.target.value)}/>
            
          </RUAInput>
          <Informations>
            <NumberInput>
              <input type="text" name="cep" id="cep"  placeholder="Número" value={numero} onChange={(event) => setNumero(event.target.value)}/>
            </NumberInput>
            <Complements>
              <input type="text" name="cep" id="cep"  placeholder="Complemento" value={complemento} onChange={(event) => setComplemento(event.target.value)}/>
              <span>Opicional</span>
            </Complements>
            
          </Informations>
          <Info>
            <Bairro>
              <input type="text" name="cep" id="cep"  placeholder="Bairro" value={bairro} onChange={(event) => setBairro(event.target.value)}/>
            </Bairro>
            <City>
              <input type="text" name="cep" id="cep" placeholder="Cidade" value={localidade} onChange={(event) => setLocalidade(event.target.value)}/>
            </City>
            <Uf>
              <input type="text" name="cep" id="cep" placeholder="UF" value={uf} onChange={(event) => setUf(event.target.value)}/>
            </Uf>
          </Info>

        </FormCheckout>
  )
}