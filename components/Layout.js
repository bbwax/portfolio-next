import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => (
  <div>
    <Header className='' />
    <main className="">{children}</main>
    <Footer />
  </div>
)

export default Layout