import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import '../../assets/css/nav.css';
import resume from '../../assets/resume/ChunYu-Chang.pdf';


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="home" href="#home-section">
          <span role="img" aria-label="computer"> </span> CYC
        </a>
      </h2>
      <nav> 
        <ul className="navbar flex-row">
        <li className="mx-2">
            <a data-testid="home" href="#home-section" onClick={() => setContactSelected(false)}>
              Home
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="skill" href="#skill" onClick={() => setContactSelected(false)}>
              Skill
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="plink" href="#plink" onClick={() => setContactSelected(false)}>
              Project
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
          <a href = {resume} target='_blank' rel="noreferrer">Resume</a>

          </li>
          
          {categories.map((category) => (
            <li
            
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name} 
            >
              
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
                
              </span>
              
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
