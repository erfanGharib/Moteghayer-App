import Advantages from './advantages'
import Services from './services'
import About from './about'

const Main = () => {
    return (
        <main className='w-full mt-20 f-col-center'>
            <Advantages />
            <About />
            <Services />
        </main>
    )
}

export default Main;