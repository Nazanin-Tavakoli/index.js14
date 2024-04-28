//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
  
    for (let i = 0; i < images.length; i++) {
      // Check if index is even
      if (i % 2 === 0) {
        images[i].style.border = '2px solid blue';
        images[i].style.borderRadius = '10px';
      } else {
        images[i].style.border = '2px solid red';
        images[i].style.borderRadius = '10px';
      }
    }
  });