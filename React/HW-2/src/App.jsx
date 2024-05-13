import './App.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';
import ModalSection from './Components/ModalSection/ModalSection';

function App() {


  return (
    <>
      <Header />
      <main>
        <ModalSection/>
      </main>
      <Footer />
    </>
  )
}

export default App
