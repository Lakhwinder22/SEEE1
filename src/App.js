import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { useState } from "react";
import About from "./components/footer/About";
import Scolarship from "./components/footer/Scolarship";
import Book from './components/footer/Book';
import Hiring from "./components/footer/Hiring";
import Footer from './components/footer';
import Register from './components/footer/Register';
import Application from "./components/footer/Application";
import Payment from "./components/footer/Payment";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
   
    <Router>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Scolarship" component={Scolarship} exact />
        <Route path="/Book" component={Book} exact />
        <Route path="/Hiring" component={Hiring} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/Application" component={Application} exact />
        <Route path="/Payment" component={Payment} exact />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;

