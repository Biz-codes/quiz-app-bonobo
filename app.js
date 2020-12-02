'use strict';
const store = {

  screens: [

    //Start Screen
    {
      message: 'How much do you know about this loveable primate? <br> Click START to find out!',
      imgSrc: 'images/bonobo-start-image.jpeg',
      imgAlt: "Bonobo staring into camera",
      buttonText: ['START'],
      state: 'start',
    },

    //Question 1
    {
      message: 'Besides chimpanzees, which species are the closest primate cousins to bonobos?',
      imgSrc: 'images/bonobo-q1.jpg',
      imgAlt: "Primate cousins diagram",
      options: ['orangutans', 'gorillas', 'humans', 'capuchin monkeys'],
      correctChoice: 'humans',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos are our closest primate cousins!',
        'Incorrect. Bonobos are our closest primate cousins!'
      ],
      state: 'question',
    },

    //Question 2
    {
      message: 'How much of our DNA do we share with bonobos?',
      imgSrc: 'images/bonobo-q2.jpg',
      imgAlt: "Woman face to face with baby bonobo",
      options: ['86.2%', '95.3%', '98.7%', '99.4%'],
      correctChoice: '98.7%',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Human genetic material is 98.7% identical to bonobo DNA!',
        'Incorrect. Human genetic material is 98.7% identical to bonobo DNA!'
      ],
      state: 'question',
    },

    //Question 3
    {
      message: 'What sexual identity most closely matches the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q3.jpeg',
      imgAlt: "Bonobos kissing",
      options: ['heterosexual', 'asexual', 'homosexual', 'pansexual'],
      correctChoice: 'pansexual',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos engage in consensual pansexual relationships with other adult troop members regardless of gender, as a way of building relationships and cooperation.',
        'Incorrect. Bonobos engage in consensual pansexual relationships with other adult troop members regardless of gender, as a way of building relationships and cooperation.'
      ],
      state: 'question',
    },

    //Question 4
    {
      message: 'What kind of love relationships most closely match the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q4.jpg',
      imgAlt: "Bonobo troop",
      options: ['monogomous', 'bigamous', 'polygomous', 'polyamorous'],
      correctChoice: 'polyamorous',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos have a polyamorous free love society, which increases their bonds as a whole community.',
        'Incorrect. Bonobos have a polyamorous free love society, which increases their bonds as a whole community.'
      ],
      state: 'question',
    },

    //Question 5
    {
      message: 'Who are the highest ranking members of bonobo society?',
      imgSrc: 'images/bonobo-q5.jpeg',
      imgAlt: "Bonobo matriarchs relaxing",
      options: ['young females', 'old females', 'young males', 'old males'],
      correctChoice: 'old females',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos are matriarchal, with leadership duties being shared amongst the older females through friendship and cooperation.',
        'Incorrect. Bonobos are matriarchal, with leadership duties being shared amongst the older females through friendship and cooperation.'
      ],
      state: 'question',
    },

    //Question 6
    {
      message: 'Where is the Ape Cognition & Conservation Initiative (formerly Great Ape Trust) located?',
      imgSrc: 'images/bonobo-q6.jpeg',
      imgAlt: "Ape Initiative Logo",
      options: ['Iowa', 'New York', 'California', 'Tennesee'],
      correctChoice: 'Iowa',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! The Ape Cognition & Conservation Initiative is located on 230 acres of forest in Des Moines, Iowa.',
        'Incorrect. The Ape Cognition & Conservation Initiative is located on 230 acres of forest in Des Moines, Iowa.'
      ],
      state: 'question',
    },

    //Question 7
    {
      message: 'Kanzi lives at the Ape Cognition & Conservation Initiative. How many words were in his vocabulary in 2018, according to the Des Moines Register?',
      imgSrc: 'images/bonobo-q7.jpeg',
      imgAlt: "Kanzi the bonobo looking into the camera",
      options: ['1,000', '2,000', '3,000', '4,000'],
      correctChoice: '3,000',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos have an incredible capacity for learning human language. Kanzi knows over 3,000 words!',
        'Incorrect. Bonobos have an incredible capacity for learning human language. Kanzi knows over 3,000 words!'
      ],
      state: 'question',
    },

    //Question 8
    {
      message: 'Which of the following is NOT a way that bonobos communicate at the Ape Cognition & Conservation Initiative?',
      imgSrc: 'images/bonobo-q8.jpeg',
      imgAlt: "Bonobos using lexigram keyboard with a scientist in a tie dye shirt",
      options: ['typing simple words on a qwerty keyboard', 'hand gestures', 'vocalization', 'selecting symbols on a lexigram keyboard'],
      correctChoice: 'typing simple words on a qwerty keyboard',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! The bonobos at the Ape Initiative cannot type words on a qwerty keyboard, but they DO communicate using hand gestures, vocalization, and selecting symbols on a lexigram keyboard!',
        'Incorrect. The bonobos at the Ape Initiative cannot type words on a qwerty keyboard, but they DO communicate using hand gestures, vocalization, and selecting symbols on a lexigram keyboard!'
      ],
      state: 'question',
    },

    //Question 9
    {
      message: 'With whom do baby bonobos have the closest bonds?',
      imgSrc: 'images/bonobo-q9.jpeg',
      imgAlt: "Mama and baby bonobo sleeping",
      options: ['their father', 'their mother', 'their siblings', 'their playmates'],
      correctChoice: 'their mother',
      buttonText: ['Submit', 'Next'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Because of their free love culture, male bonobos cannot be sure which babies are theirs, so baby bonobos share incredibly close bonds with their mothers!',
        'Incorrect. Because of their free love culture, male bonobos cannot be sure which babies are theirs, so baby bonobos share incredibly close bonds with their mothers!'
      ],
      state: 'question',
    },

    //Question 10
    {
      message: 'What values characterize the overarching culture of bonobos?',
      imgSrc: 'images/bonobo-q10.jpeg',
      imgAlt: "Bonobos sharing fruit",
      options: ['power and control', 'violence and territorial aggression', 'fun and anarchy', 'cooperation and peace'],
      correctChoice: 'cooperation and peace',
      buttonText: ['Finish'],
      feedback: [
        'Click Submit to check your answer!',
        'CORRECT! Bonobos live in peaceful communities which value love and cooperation!',
        'Incorrect. Bonobos live in peaceful communities which value love and cooperation!'
      ],
      state: 'question',
    },

    //Results
    {
      message: 'Final Score',
      imgSrc: 'bonobo-results.jpeg',
      imgAlt: "Adorable baby bonobo",
      buttonText: ['Try again?'],
      state: 'results',
    }
  ],

  hasAnswered: false,
  quizStarted: false,
  screenNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates


function startScreen(youAreHere) {
  return `
  <form id="js-form">
    <h2 class="js-form-title">${youAreHere.message}</h2>
    <div class='image-wrapper'>
      <img src="${youAreHere.imgSrc}" alt="${youAreHere.imgAlt}">
    </div>
    <button class="start-button" type='submit'>${youAreHere.buttonText[0]}</button>
</form>
`;
}

function questionScreen(youAreHere) {
  return `
  <form id="js-form">
    <h2 class="js-form-title">${youAreHere.message}</h2>
    <div class="image-wrapper">
      <img src="${youAreHere.imgSrc}" alt="${youAreHere.imgAlt}">
    </div>
    <div id="options">
      <input class="option" type="radio" name="options" value="${youAreHere.options[0]}" name="option">
      <br>
      <input class="option" type="radio" name="options" value="${youAreHere.options[1]}" name="option">
      <br>
      <input class="option" type="radio" name="options" value="${youAreHere.options[2]}" name="option">
      <br>
      <input class="option" type="radio" name="options" value="${youAreHere.options[3]}" name="option">
      <br>
  </div>
  <div> 
    <p class="feedback"> ${youAreHere.feedback[0]} </p>
    <p> Question # ${youAreHere.screenNumber} of 10 </p>
    <p> Current Score: ${store.score}/10 </p>
  </div>
  <button class="submit-choice" type="submit">${youAreHere.buttonText[0]}</button>
  </form>
  `;
}


function resultsScreen(youAreHere) {
  return `
  <form id="js-form">
    <h2 class="js-form-title">${youAreHere.message}</h2>
    <h3 class="text" id="finalScore">${store.score}/10</h3>
    <button class="restart" id="tryagain">Try Again?</button>
    </form>
  `;
}
//When the page loads, I want the `startScreen` to display

function createTemplate(youAreHere) {
  switch (youAreHere.state) {
  case 'start':
    return startScreen(youAreHere);
  case 'question':
    return questionScreen(youAreHere);
  case 'finished':
    return resultsScreen(youAreHere);
    }
  }

// State Management
// Get Screen Index 
function getIndex() {
  let index = store.screenNumber;
  return index;
  }

// Update Index
function updateIndex() {
  if (getIndex() < store.screens.length - 1) {
    store.screenNumber++;
  }
  else store.screenNumber = 1;
  }
// Update Score
function updateScore() {
  store.score++;
}

// Reset Score
function resetScore() {
  store.score = 0;
}

// Set Question to Question 1
function resetQuiz() {
  store.screenNumber = 1;
}
// Check Answer
function checkSubmission(entry, correctChoice) {
  if (entry === correctChoice) {
    return true;
  }
  else { return false; }
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  const screen = store.screens[getIndex()];
  const template = createTemplate(screen);
  $('main').html(template);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//When the Start button is clicked, I want the screens to add 1 and be on a `questionScreen` for #1 to display
//The feedback section should read "Click Submit to to check you answer!"
//The button text should say "Submit"
//The slide info should read "Question 1 of 10. Current Score 0/10"
//When the Submit button is clicked with a correct answer, the feedback section should change to [1] with the correct message
//the button text should change to "Next."
//the slide info should read "Question 1 of 10. Current Score 1/10"
//When the Submit button is clicked with an incorrect answer, the feedback section should change to [2] with the incorrect message
//The button text should change to "Next."
//The slide info should read "Question 1 of 10. Current Score 0/10"
//When the "Next" button is clicked, the screens should add 1 and change to the version 0 of question 2.
// On screen [10] when the Finish button is clicked, the screen should change to [11] to show the `resultsScreen`
//The screen should show the Final score
//If the user clicks Try Again the screen should go back to the Question 1 which is screens[1]
//The score should reset to 0

function startQuiz() {
  $('main').on('click', '.start-button', event => {
    event.preventDefault();
    store.startQuiz = true;
    updateIndex();
    render();
  });
}

function giveCorrectFeedback(screen) {
  $('.feedback').text(screen.feedback[1])
}

function giveIncorrectFeedback(screen) {
  $('.feedback').text(screen.feedback[2])
}
  
function giveFeedback (screen, youAreHere) {
  if (checkSubmission(youAreHere, screen.correctChoice) === true) {
    updateScore();
    giveCorrectFeedback (screen);
  }
  else {
    giveIncorrectFeedback(screen)
  }
}

// Check Answer and toggle next button 
function toggleHasAnswered() {
  store.hasAnswered = !store.hasAnswered;
}
function checkIfAnswered(screen, youAreHere) {
  if (!store.hasAnswered) {
    giveQuestionFeedback(screen, youAreHere);
    toggleHasAnswered();
  }
  else {
    toggleHasAnswered();
    render();
  }
}

function editSubmitButtonClass(screen) {
  $('.submit-choice').addClass('next');
  $('.submit-choice').text(screen.buttonText[1]);
  $('.submit-choice').removeClass('submit-choice');
}
// On Click Event Handler
function getFeedback() {
  $('main').on('click', '.submit-choice', event => {
    event.preventDefault();
    let youAreHere = $('input[name="options"]:checked').val();
    checkIfAnswered(screen, youAreHere);
    editSubmitButtonClass(screen);
    toggleHasAnswered();
  });
}

// Getting to the Next Question
// toggle Submit Button
function editNextButtonClass(screen) {
  $('.next').addClass('.submit-choice');
  $('.next').text(screen.buttonText[0]);
  $('.next').removeClass('next');
}

// On Click Event Handler
function nextQuestion() {
  $('main').on('click', '.next', event => {
    event.preventDefault();
    updateIndex();
    editNextButtonClass(screen);
    render();
  });
}

//Restarting The Quiz
// On Click Event Handler
function restartQuiz() {
  $('main').on('click', '.restart', event => {
    event.preventDefault();
    resetScore();
    resetQuiz();
    render();
  });
}

// Callback function
function main() {
  render();
  startQuiz();
  getFeedback();
  nextQuestion();
  restartQuiz();
}

//on DOM ready run callback function
$(main);

/* 
  
  
*/