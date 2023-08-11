import Header from './Header'
import Footer from './Footer'
import LoadingComponent from './LoadingComponent'

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <LoadingComponent/>
    <Header className='' />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export default Layout