//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */
window.addEventListener('DOMContentLoaded', () => {
    const characterImages = {
      "Harry-Potter": "https://example.com/Harry_Potter_image.jpg",
      "Hermione-Granger": "https://example.com/Hermione_Granger_image.jpg",
      "Ron-Weasley": "https://example.com/Ron_Weasley_image.jpg",
      "Severus-Snape": "https://example.com/Severus_Snape_image.jpg",
      "Draco-Malfoy": "https://example.com/Draco_Malfoy_image.jpg",
      "Cedric-Diggory": "https://example.com/Cedric_Diggory_image.jpg",
      "Lord-Voldemort": "https://example.com/Lord_Voldemort_image.jpg",
      "Bellatrix-Lestrange": "https://example.com/Bellatrix_Lestrange_image.jpg"
    };
  
    
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const imageId = card.querySelector('img').getAttribute('id');
      const imageSrc = characterImages[imageId];
  
      card.querySelector('img').setAttribute('src', imageSrc);
      card.querySelector('img').setAttribute('alt', imageId);
    });
  });