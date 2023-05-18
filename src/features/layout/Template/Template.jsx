import { Header, Menu, Footer } from '@/features/layout'

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Template
