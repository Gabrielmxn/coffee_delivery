import axios from "axios";
import { useContext, useEffect} from 'react';
import { Bairro, CEPInput, City, Complements, FormCheckout, Info, Informations, NumberInput, RUAInput, Uf } from "./styles";
import { PedidoContext } from "../../contexts/Pedido";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function FormAddress(){
  const {  heandleAddress, pagamento } = useContext(PedidoContext)
  const { register, getValues, setValue, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = dataT => {
    console.log(dataT);

    if(pagamento !== ''){
      heandleAddress(dataT.checkout)
      navigate('/success');
    }
  }
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {

      if(name === 'checkout.cep'){
        getAddress(value.checkout.cep);
      }
    })
    return () => subscription.unsubscribe();

  }, [watch])

  async function getAddress(value: string){
    if(value.length !== 8){
      return
    }
    const { data } = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`)
    console.log(data)
    const importAddress = {
      bairro: data.bairro,
      localidade: data.localidade,
      logradouro: data.logradouro,
      uf: data.uf
    }

    console.log(getValues("cep"))
    console.log('wdad');
    // setLogradouro(data.logradouro)
    // setBairro(data.bairro)
    // setLocalidade(data.localidade)
    setValue("checkout", importAddress)

  }

  return(
    <FormCheckout id="form-checkout" action="" onSubmit={handleSubmit(onSubmit)}>
          <CEPInput >
            <input type="text"  placeholder="CEP" {...register("checkout.cep", {required: true})} />
            
          </CEPInput>
          <RUAInput>
            <input type="text" placeholder="Rua" {...register("checkout.logradouro", {required: true})} />
            
          </RUAInput>
          <Informations>
            <NumberInput>
              <input type="text"  placeholder="Número"  {...register("checkout.numero", {required: true})}/>
            </NumberInput>
            <Complements>
              <input type="text"  placeholder="Complemento" {...register("checkout.complemento")}/>
              <span>Opicional</span>
            </Complements>
            
          </Informations>
          <Info>
            <Bairro>
              <input type="text"  placeholder="Bairro" {...register("checkout.bairro", {required: true})}/>
            </Bairro>
            <City>
              <input type="text" placeholder="Cidade" {...register("checkout.localidade", {required: true})}/>
            </City>
            <Uf>
              <input type="text" placeholder="UF" {...register("checkout.uf", {required: true})}/>
            </Uf>
          </Info>
        </FormCheckout>
  )
}