import React from 'react';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import './assets/css/bootstrap.min.css';
// import './assets/css/bootstrap-theme.min.css';
// import './assets/css/fontAwesome.css';
// import './assets/css/tooplate-style.css';


import Nav from './components/Nav';
import About from './components/About';
// import ContactForm from './components/Contact';
// import Portfolio from './components/Project';
// import Resume from './components/Resume';
// import Footer from './components/Footer'

function App() {
  return (
    // <Router>
    //   <Nav></Nav>
    //   <Switch>
    //     <Route exact path="/" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/resume" component={Resume} />
    //     <Route exact path="/contact" component={ContactForm} />
    //   </Switch>
    //   <Footer />
    // </Router>
    <div>
    <Nav></Nav>
    <main>
    <About></About>
    </main>
    </div>
  );
}

export default App;