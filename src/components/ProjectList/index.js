import React, { useState } from 'react';
import Modal from '../Modal';
import projects from '../../data/projects';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const currentPhotos = projects.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div id="linklist">
        <h5>Links</h5>
        <ul>
          <li>1. <a href="https://rentallife-heroku-90ae272989c9.herokuapp.com/">Rental-Life</a></li>
          <li>2. <a href="https://secure-temple-27140.herokuapp.com/">Note Taker</a></li>
          <li>3. <a href="https://jamart01.github.io/Project-1-Beer-Me/">Beer Me</a></li>
          <li>4. <a href="https://dry-caverns-77370.herokuapp.com/">The Tech Blog</a></li>
          <li>5. <a href="https://guarded-tor-09060.herokuapp.com/">nerdBoard</a></li>
          <li>6. <a href="https://github.com/mr91217/Weather-Dashboard">Weather Dashboard</a></li>
          <li>7. <a href="https://github.com/mr91217/Team-Profile-Generator">The Team Generator</a></li>
          <li>8. <a href="https://damp-gorge-13767.herokuapp.com/">Shop-Shop</a></li>
          <li>9. <a href="https://github.com/mr91217/TalkTalk">TalkTalk</a></li>
        </ul>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.GIF`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            loading="lazy"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
