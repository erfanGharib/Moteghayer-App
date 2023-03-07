import Footer from '../components/footer/footer'
import NavBar from '@/components/navbar/navbar'

const NavbarFooter = ({ children }) => {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
}

export default NavbarFooter;