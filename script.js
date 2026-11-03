// 1. Get references to the HTML elements
const likeButton = document.getElementById('likeButton');
const counter = document.getElementById('counter');

// 2. Set the starting count number
let count = 12;
let isLiked = false;

// 3. Listen for clicks on the button
likeButton.addEventListener('click', () => {
  if (!isLiked) {
    // If not liked yet: increase number and set isLiked to true
    count++;
    isLiked = true;
  } else {
    // If already liked: decrease number and set isLiked to false
    count--;
    isLiked = false;
  }

  // 4. Update the text on the screen
  counter.innerText = count;

  // 5. Toggle the CSS class to change the color to blue
  likeButton.classList.toggle('liked');
});
