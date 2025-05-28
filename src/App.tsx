import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Slider} from "./components/Slider";
import {HomePromoSection} from "./components/PromoSection";


function App() {

  return (
    <>
      <Header token={"null"}></Header>
        <Slider />
      <HomePromoSection></HomePromoSection>
        <Footer />
    </>
  )
}

export default App
