import './App.css';

import Cards from "./components/Cards";
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Login/>
      <Nav/>
      <Cards />
      <Footer/>
    </div>
  );
}

export default App;
