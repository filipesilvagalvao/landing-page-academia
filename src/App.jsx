import About from "./components/about/About"
import Filler from "./components/filler/Filler"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Place from "./components/place/Place"
import Price from "./components/price/Price"
import Range from "./components/range/Range"
import Footer from "./components/footer/Footer"
import Zap from "./components/zap/Zap"
function App() {

  return (
    <>
      <Header />
      <Home/>
      <Filler/>
      <Place/>
      <About/>
      <Range/>
      <Price/>
      <Footer/>
      <Zap/>
    </>
  )
}

export default App
