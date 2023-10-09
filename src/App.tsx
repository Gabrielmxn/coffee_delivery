import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from  './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProviderContextCart } from './contexts/ProviderCart'
import { ProviderContextPedido } from './contexts/Pedido'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProviderContextCart>
      <ProviderContextPedido>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        </ProviderContextPedido>
      </ProviderContextCart>
      

      <GlobalStyle />
     </ThemeProvider >
  )
}

export default App
