import './App.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';
import ModalSection from './Components/ModalSection/ModalSection';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
