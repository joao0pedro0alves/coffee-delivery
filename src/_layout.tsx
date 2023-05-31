import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { Header } from './components/Header'
import { CartContextProvider } from './contexts/CartContext'
import { LayoutContainer } from './styles'

export function RootLayout() {
  return (
    <LayoutContainer>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>

      <Toaster position="top-right" />
    </LayoutContainer>
  )
}
