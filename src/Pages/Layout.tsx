import Footer from "./Components/Footer"
import Header from "./Components/Header"

const Layout = ({element}:{element:JSX.Element}) => {
  return (
    <>
    <Header />
    {element}
    <Footer />
    </>
  )
}

export default Layout