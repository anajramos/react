
import Footer from './components/Footer';
import BotaoContador from './components/BotaoContador';
import Header from './components/Header';
import Prato  from './components/Prato';   
import Bebidas from './components/Bebidas'; 

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Olá, mundo!</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Serviços</li>
          </ul>
        </nav>
        <p>Editando o App.jsx</p>
      </div>
      <div>
        <h2>Testando novos elementos</h2>
      </div>
      <Bebidas />
      <Prato />
      <BotaoContador />
      <Footer />
    </>
  );
}

export default App;