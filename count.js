//Count the number of <li> in the countItems.html file and show the results in console.
const tag = document.querySelector("ul");
const countButton = document.querySelector("input[value='Count all items in the tag']");
const items = tag.querySelectorAll("li");
const count = items.length;
console.log(count);
;
