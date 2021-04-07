import './App.css';
import HeaderTop from './components/Header';
import DescriBanner from './components/Banner';
import Produit from './components/Projects';
import TextContact from './components/Contact';
import FooterBas from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <DescriBanner/>
      <Produit/>
      <TextContact/>
      <FooterBas />
    </div>
  );
}

export default App;
