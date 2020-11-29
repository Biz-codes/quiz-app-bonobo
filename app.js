'use strict';
const store = {

  questions: [

    //Question 1
    {
      question: 'Besides chimpanzees, which species are the closest primate cousins to bonobos?',
      imgSrc: 'images/bonobo-q1.jpg',
      imgAlt: "Primate cousins diagram",
      options: ['orangutans', 'gorillas', 'humans', 'capuchin monkeys'],
      correctChoice: 'humans',
      feedback: 'Bonobos are our closest primate cousins!'
    },

    //Question 2
    {
      question: 'How much of our DNA do we share with bonobos?',
      imgSrc: 'images/bonobo-q2.jpg',
      imgAlt: "Woman face to face with baby bonobo",
      options: ['86.2%', '95.3%', '98.7%', '99.4%'],
      correctChoice: '98.7%',
      feedback: 'Human genetic material is 98.7% identical to bonobo DNA!'
    },

    //Question 3
    {
      question: 'What sexual identity most closely matches the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q3.jpeg',
      imgAlt: "Bonobos kissing",
      options: ['heterosexual', 'asexual', 'homosexual', 'pansexual'],
      correctChoice: 'pansexual',
      feedback: 'Bonobos engage in consensual pansexual relationships with other adult troop members regardless of gender, as a way of building relationships and cooperation.'
    },

    //Question 4
    {
      question: 'What kind of love relationships most closely match the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q4.jpg',
      imgAlt: "Bonobo troop",
      options: ['monogomous', 'bigamous', 'polygomous', 'polyamorous'],
      correctChoice: 'polyamorous',
      feedback: 'Bonobos have a polyamorous free love society, which increases their bonds as a whole community.'
    },

    //Question 5
    {
      question: 'Who are the highest ranking members of bonobo society?',
      imgSrc: 'images/bonobo-q5.jpeg',
      imgAlt: "Bonobo matriarchs relaxing",
      options: ['young females', 'old females', 'young males', 'old males'],
      correctChoice: 'old females',
      feedback: 'Bonobos are matriarchal, with leadership duties being shared amongst the older females through friendship and cooperation.'
    },

    //Question 6
    {
      question: 'Where is the Ape Cognition & Conservation Initiative (formerly Great Ape Trust) located?',
      imgSrc: 'images/bonobo-q6.jpeg',
      imgAlt: "Ape Initiative Logo",
      options: ['Iowa', 'New York', 'California', 'Tennesee'],
      correctChoice: 'Iowa',
      feedback: 'The Ape Cognition & Conservation Initiative is located on 230 acres of forest in Des Moines, Iowa.'
    },

    //Question 7
    {
      question: 'Kanzi lives at the Ape Cognition & Conservation Initiative. How many words were in his vocabulary in 2018, according to the Des Moines Register?',
      imgSrc: 'images/bonobo-q7.jpeg',
      imgAlt: "Kanzi the bonobo looking into the camera",
      options: ['1,000', '2,000', '3,000', '4,000'],
      correctChoice: '3,000',
      feedback: 'Bonobos have an incredible capacity for learning human language. Kanzi knows over 3,000 words!'
    },

    //Question 8
    {
      question: 'Which of the following is NOT a way that bonobos communicate at the Ape Cognition & Conservation Initiative?',
      imgSrc: 'images/bonobo-q8.jpeg',
      imgAlt: "Bonobos using lexigram keyboard with a scientist in a tie dye shirt",
      options: ['typing simple words on a qwerty keyboard', 'hand gestures', 'vocalization', 'selecting symbols on a lexigram keyboard'],
      correctChoice: 'typing simple words on a qwerty keyboard',
      feedback: 'The bonobos at the Ape Initiative cannot type words on a qwerty keyboard, but they DO communicate using hand gestures, vocalization, and selecting symbols on a lexigram keyboard!'
    },

    //Question 9
    {
      question: 'With whom do baby bonobos have the closest bonds?',
      imgSrc: 'images/bonobo-q9.jpeg',
      imgAlt: "Mama and baby bonobo sleeping",
      options: ['their father', 'their mother', 'their siblings', 'their playmates'],
      correctChoice: 'their mother',
      feedback: 'Because of their free love culture, male bonobos cannot be sure which babies are theirs, so baby bonobos share incredibly close bonds with their mothers!'
    },

    //Question 10
    {
      question: 'What values characterize the overarching culture of bonobos?',
      imgSrc: 'images/bonobo-q10.jpeg',
      imgAlt: "Bonobos sharing fruit",
      options: ['power and control', 'violence and territorial aggression', 'fun and anarchy', 'cooperation and peace'],
      correctChoice: 'cooperation and peace',
      feedback: 'Bonobos live in peaceful communities which value love and cooperation!'
    }
  ],

  quizStarted: false,
  questionNumber: 0,
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

function startScreen() {
  return `
  <form id="js-form">
    <header>
        <h1>Our Cousin Bonobo</h1>
        <img src="images/bonobo-start-image.jpeg" alt="Bonobo staring into camera" width="25%">
    </header>
        <h2 class="text">How much do you know about this loveable primate?</h2>
        <p> Click START to find out!</p>
        <button class="start-button" id="startQuizButton">START</button>
  </form>
`;
}

function questionScreens(questions) {
  return `
  <form id="js-form">
    <h2 class="js-form-title">${questions[i].question}</h2>
    <img src="${questions[i].imgSrc}" alt="${questions[i].imgAlt}">
    <div id="options">
      <input class="option" type="radio" value="${questions[i].options[0]}" name="option">
      <br>
      <input class="option" type="radio" value="${questions[i].options[1]}" name="option">
      <br>
      <input class="option" type="radio" value="${questions[i].options[2]}" name="option">
      <br>
      <input class="option" type="radio" value="${questions[i].options[3]}" name="option">
      <br>
  </div>
  <button type="submit">Submit</button>
  </form>
  `;
}


function resultsScreen() {
  return `
  <form id="js-form">
    <h2 class="text"> Final Score </h2>
    <h3 class="text" id="finalScore">${store.totalCorrect}/10</h3>
    <button class="start-button" id="tryagain">Try Again</button>
    </form>
  `;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


/* 
  
  
*/