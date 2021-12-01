import Navbar from "components/global/navbar"
import Footer from "components/global/footer"

const Layout = ({ children }) => {

  return(
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout