// query selection
const memeContainer = document.querySelector('#meme-container');
const engageBtn = document.querySelector('#engage');
const url = document.querySelector('#url');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');
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
  //generate the meme
  generateMeme();
  //reset the values of the inputs
  resetValues();
});

function generateMeme() {
  //create the image from the url
  const newImg = document.createElement('img');
  newImg.classList.add('new-img');
  newImg.src = url.value;

  //add the image to the meme
  const newMeme = document.createElement('div');
  newMeme.classList.add('new-meme');
  newMeme.append(newImg);

  //prepare the top text for the meme
  const top = document.createElement('span');
  top.innerText = `${topText.value}`;
  top.classList.add('top');

  //prepare the bot text for the meme
  const bot = document.createElement('span');
  bot.innerText = `${botText.value}`;
  bot.classList.add('bot');

  //add top and bot text to the meme
  newMeme.append(top, bot);

  //add the meme to the meme-container
  memeContainer.append(newMeme);

  //eventListener to remove the meme from the meme-container on click
  newMeme.addEventListener('click', function () {
    newMeme.remove();
  });
}

// function to clear the values from the inputs after meme submission
function resetValues() {
  url.value = '';
  topText.value = '';
  botText.value = '';
}

/*
a couple of meme urls for testing

https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip

https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg

https://makeameme.org/media/templates/250/one-does-not-simply.jpg
*/



