import Header from './Header'
import Footer from './Footer'
import LoadingComponent from './LoadingComponent'

const Layout = ({ children }) => (
  <div>
    <LoadingComponent/>
    <Header className='' />
    <main className="">{children}</main>
    <Footer />
  </div>
)

export default Layout