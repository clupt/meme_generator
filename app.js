// query selection
const memeContainer = document.querySelector('#meme-container');
const engageBtn = document.querySelector('#engage');
const url = document.querySelector('#url');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');

// element creation
const newImg = document.createElement('img');
const newMeme = document.createElement('div');
const top = document.createElement('span');
const bot = document.createElement('span');

/*
  Todos:
  -- add event listener to the button that creates a new meme,appends the
     new image from the url, adds the top and bottom text to the image,
     and appends the new meme to the meme-container

  -- add classes to each of the elements when they are created, for styling

  -- prevent default submit action of form when btn is clicked

  -- reset values of the input fields after the button is clicked

  -- add an optional button to use a random image taken from a list of meme imgs

*/

engageBtn.addEventListener('click', function (e) {
  e.preventDefault();

  //create the image from the url

  //add the image to the meme

  //add the top text to the meme

  //add the bot text to the meme

  //add the meme to the meme-container

  //reset the values

});

function generateMeme() {

}

function resetValues() {

}

