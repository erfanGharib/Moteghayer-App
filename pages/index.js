import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/landingPage/header'
import Main from '../components/landingPage/main/main'
import Footer from '../components/footer/footer'
import NavbarFooter from '@/Layout/navbarFooter'

const Landing = () => {
  return (
    <>
      <Head>
        <title>متغیر | بنر ساز آنلاین</title>
        <meta name="description" content="Online Banner Maker" />
      </Head>

      <NavbarFooter>
        <Header />
        <Main />
      </NavbarFooter>
    </>
  )
}

export default Landing;