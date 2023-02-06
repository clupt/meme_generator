// query selection
const memeContainer = document.querySelector('#meme-container');
const engageBtn = document.querySelector('#engage');
const url = document.querySelector('#url');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');

engageBtn.addEventListener('click', function (e) {
  e.preventDefault();
  //generate the meme
  generateMeme();
  //reset the values of the inputs
  resetValues();
});

/*
  Use event delegation to remove memes upon clicking icons in the meme-container
  Needs to go two parent levels up, since the icons are appended to the imgs
  which are then appended to the newMeme divs
*/

memeContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    e.target.parentElement.parentElement.remove();
  }
});

function generateMeme() {
  const deleteIcon = document.createElement('div');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.setHTML('<i class="fa fa-window-close" aria-hidden="true"></i>');

  //create the image from the url
  const newImg = document.createElement('img');
  newImg.classList.add('new-img');
  newImg.src = url.value;

  //add the image to the meme
  const newMeme = document.createElement('div');
  newMeme.classList.add('new-meme');

  //prepare the top text for the meme
  const top = document.createElement('span');
  top.innerText = `${topText.value.toUpperCase()}`;
  top.classList.add('top');

  //prepare the bot text for the meme
  const bot = document.createElement('span');
  bot.innerText = `${botText.value.toUpperCase()}`;
  bot.classList.add('bot');

  //add top and bot text to the meme
  newMeme.append(top, bot, newImg, deleteIcon);

  //add the meme to the meme-container
  memeContainer.append(newMeme);
}

// function to clear the values from the inputs after meme submission
function resetValues() {
  url.value = '';
  topText.value = '';
  botText.value = '';
}

/*
              a couple of meme urls for testing

https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg

https://makeameme.org/media/templates/250/one-does-not-simply.jpg


                                  Todos:

  -- add an optional button to use a random image taken from a list of meme imgs

  -- possibly extract some funcs to reduce repetition (adding classes etc...)
*/



