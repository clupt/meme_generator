// query selection
const memeContainer = document.querySelector('#meme-container');
const engageBtn = document.querySelector('#engage');
const randomBtn = document.querySelector('#random');
const url = document.querySelector('#url');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');

//main create meme button
engageBtn.addEventListener('click', function (e) {
  e.preventDefault();
  //generate the meme
  generateMeme();
  //reset the values of the inputs
  resetValues();
});

//random meme button
randomBtn.addEventListener('click', function (e) {
  e.preventDefault();
  generateRandomMeme();
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

//main meme generator function
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

//images for randomizer
const imgsArr = [
  { imgSrc: './imgs/Grumpy-Cat-2015-memes.webp' },
  { imgSrc: './imgs/Mocking-Spongebob.jpg' },
  { imgSrc: './imgs/But-Thats-None-Of-My-Business.jpg' },
  { imgSrc: './imgs/Disaster-Girl.jpg' },
  { imgSrc: './imgs/Futurama-Fry.jpg' },
  { imgSrc: './imgs/I-Should-Buy-A-Boat-Cat.jpg' },
  { imgSrc: './imgs/one-does-not-simply.jpg' },
];

//text for randomizer
const topStrings = [
  'ermagerd',
  'one does not simply',
  'shut up and',
  'i am not',
  'i can haz',
  'sometimes you',
  'i should buy a'
];

const botStrings = [
  'walk into mordor',
  'batman',
  'stonks',
  'take my money',
  'everything is fine',
  'cheezburger'
];

//random meme generation
function generateRandomMeme() {
  //create a delete icon
  const deleteIcon = document.createElement('div');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.setHTML('<i class="fa fa-window-close" aria-hidden="true"></i>');

  //select a random image from the list
  shuffle(imgsArr);
  const randomImg = document.createElement('img');
  randomImg.classList.add('new-img');
  randomImg.src = imgsArr[0].imgSrc;

  //add the image to the meme
  const newMeme = document.createElement('div');
  newMeme.classList.add('new-meme');

  //select a random string for top text from the list
  const top = document.createElement('span');
  shuffle(topStrings);
  top.innerText = topStrings[0].toUpperCase();
  top.classList.add('top');

  //select a random string for the bot text from the list
  const bot = document.createElement('span');
  shuffle(botStrings);
  bot.innerText = botStrings[0].toUpperCase();
  bot.classList.add('bot');

  //add the top and bot text to the meme
  newMeme.append(top, bot, randomImg, deleteIcon);

  //add the meme to the memeContainer
  memeContainer.append(newMeme);
}

// function to clear the values from the inputs after meme submission
function resetValues() {
  url.value = '';
  topText.value = '';
  botText.value = '';
}

//shuffle for randomizer
function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

/*
              a couple of meme urls for testing

https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg

https://makeameme.org/media/templates/250/one-does-not-simply.jpg

                              Todos:
          the meme gen and random gen functions have a lot of overlap
*/

