import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from  './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProviderContextCart } from './contexts/ProviderCart'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProviderContextCart>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProviderContextCart>
      

      <GlobalStyle />
     </ThemeProvider >
  )
}

export default App
