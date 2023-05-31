import { Outlet } from 'react-router-dom'
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
    </LayoutContainer>
  )
}
