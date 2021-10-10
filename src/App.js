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
    

    // {
    //   name: 'commercial',
    //   description: 'Photos of grocery stores, food trucks, and other commercial projects',
    // },
    // { name: 'portraits', description: 'Portraits of people in my life' },
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
    { name: 'projects', description: 'Note-Taker, Beer-me, The Tech Blog,.......Keep Updating!!!' },
    // { name: 'skill', description: 'HTML, CSS, JavaScript, React, node, Express, MySQL' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        // categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Project currentCategory={currentCategory}></Project>

          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
