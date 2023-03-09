import Footer from '../components/global/footer/footer'
import NavBar from '@/components/global/navbar/navbar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
}

export default Layout;