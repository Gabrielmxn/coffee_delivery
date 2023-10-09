import { ReactNode, createContext, useState } from "react";

interface ProviderContextPedidoProps {
  children: ReactNode

}

interface AddressProps {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}

interface PedidoContextProps {
  address: AddressProps
  pagamento: string
  heandleAddress: (end: AddressProps) => void;
  hadnlePagamento: (typePamento: string) => void;
}
export const PedidoContext = createContext<PedidoContextProps>({} as PedidoContextProps)


export function ProviderContextPedido({ children }: ProviderContextPedidoProps){
  const [address, setAddrees] = useState<AddressProps>({} as AddressProps)
  const [pagamento, setPagamento] = useState('')
  function heandleAddress(end: AddressProps){
    setAddrees(end)
  }

  function hadnlePagamento(typePagement: string){
    setPagamento(typePagement)
  }

  return(
    <PedidoContext.Provider value={{address, heandleAddress, pagamento, hadnlePagamento}}>
      {children}
    </PedidoContext.Provider>
  )
}