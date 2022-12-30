import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store/store'
import {
  ThemeProvider,
  Preflight
} from '@xstyled/styled-components'

import { theme } from './app/theme/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Preflight />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
