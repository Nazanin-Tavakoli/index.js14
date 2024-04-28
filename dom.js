//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

const secondParagraph = document.querySelector('#paragraph2');
console.log(secondParagraph);

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

allParagraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
  });

  allParagraphs[3].textContent = 'New text for Paragraph 4';
  
  
  allParagraphs.forEach((paragraph, index) => {
    paragraph.id = paragraph${index + 1};
    paragraph.classList.add('paragraph');
  });


  allParagraphs.forEach((paragraph) => {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
  });  