import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Subnav from './components/Subnavbar';
import Event from './components/Event';
import Attend from './components/Attend';
import List from './components/List';
import Speaker from './components/Speaker';
import Agenda from './components/Agenda';
import FQA from './components/FQA';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Subnav />
      <Home />
      <Event />
      <Attend />
      <List />
      <Speaker />
     <Agenda />
     <FQA />
     <Footer />
     <Copyright />
    </div>
  );
}

export default App;
