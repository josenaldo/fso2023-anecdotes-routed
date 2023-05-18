import { Header, Menu, Footer } from '@/features/layout'
import { Notification } from '@/features/notification'

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <Notification />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Template
