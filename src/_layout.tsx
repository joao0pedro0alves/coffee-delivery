import { ReactNode } from 'react'
import { Header } from './components/Header'
import { LayoutContainer } from './styles'

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}
