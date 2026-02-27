import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Skill from './components/Skill';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'projects', description: 'Note-Taker, Beer-me, The Tech Blog,.......Keep Updating!!!' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Home />
            <About />
            <Skill />
            <Project currentCategory={currentCategory} />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
