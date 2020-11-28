'use strict';
const store = [

  //Question 1
  {
    question: 'Besides chimpanzees, which species are the closest primate cousins to bonobos?',
    imgSrc: 'images/bonobo-q1.jpg',
    imgAlt: "Primate cousins diagram",
    choices: ['orangutans', 'gorillas', 'humans', 'capuchin monkeys'],
    correctChoice: 2,
    feedback: 'Bonobos are our closest primate cousins!'
  },

  //Question 2
  {
    question: 'How much of our DNA do we share with bonobos?',
    imgSrc: 'images/bonobo-q2.jpg',
    imgAlt: "Woman face to face with baby bonobo",
    choices: ['86.2%', '95.3%', '98.7%', '99.4%'],
    correctChoice: 2,
    feedback: 'Human genetic material is 98.7% identical to bonobo DNA!'
  },

  //Question 3
  {
    question: 'What sexual identity most closely matches the bonobo lifestyle?',
    imgSrc: 'images/bonobo-q3.jpeg',
    imgAlt: "Bonobos kissing",
    choices: ['heterosexual', 'asexual', 'homosexual', 'pansexual'],
    correctChoice: 3,
    feedback: 'Bonobos engage in consensual pansexual relationships with other adult troop members regardless of gender, as a way of building relationships and cooperation.'
  },

  //Question 4
  {
    question: 'What kind of love relationships most closely match the bonobo lifestyle?',
    imgSrc: 'images/bonobo-q4.jpg',
    imgAlt: "Bonobo troop",
    choices: ['monogomous', 'bigamous', 'polygomous', 'polyamorous'],
    correctChoice: 3,
    feedback: 'Bonobos have a polyamorous free love society, which increases their bonds as a whole community.'
  },

  //Question 5
  {
    question: 'Who are the highest ranking members of bonobo society?',
    imgSrc: 'images/bonobo-q5.jpeg',
    imgAlt: "Bonobo matriarchs relaxing",
    choices: ['young females', 'old females', 'young males', 'old males'],
    correctChoice: 1,
    feedback: 'Bonobos are matriarchal, with leadership duties being shared amongst the older females through friendship and cooperation.'
  },

  //Question 6
  {
    question: 'Where is the Ape Cognition & Conservation Initiative (formerly Great Ape Trust) located?',
    imgSrc: 'images/bonobo-q6.jpeg',
    imgAlt: "Ape Initiative Logo",
    choices: ['Iowa', 'New York', 'California', 'Tennesee'],
    correctChoice: 0,
    feedback: 'The Ape Cognition & Conservation Initiative is located on 230 acres of forest in Des Moines, Iowa.'
  },

  //Question 7
  {
    question: 'Kanzi lives at the Ape Cognition & Conservation Initiative. How many words were in his vocabulary in 2018, according to the Des Moines Register?',
    imgSrc: 'images/bonobo-q7.jpeg',
    imgAlt: "Kanzi the bonobo looking into the camera",
    choices: ['1,000', '2,000', '3,000', '4,000'],
    correctChoice: 2,
    feedback: 'Bonobos have an incredible capacity for learning human language. Kanzi knows over 3,000 words!'
  },

  //Question 8
  {
    question: 'Which of the following is NOT a way that bonobos communicate at the Ape Cognition & Conservation Initiative?',
    imgSrc: 'images/bonobo-q8.jpeg',
    imgAlt: "Bonobos using lexigram keyboard with a scientist in a tie dye shirt",
    choices: ['typing simple words on a qwerty keyboard', 'hand gestures', 'vocalization', 'selecting symbols on a lexigram keyboard'],
    correctChoice: 0,
    feedback: 'The bonobos at the Ape Initiative cannot type words on a qwerty keyboard, but they DO communicate using hand gestures, vocalization, and selecting symbols on a lexigram keyboard!'
  },

  //Question 9
  {
    question: 'With whom do baby bonobos have the closest bonds?',
    imgSrc: 'images/bonobo-q9.jpeg',
    imgAlt: "Mama and baby bonobo sleeping",
    choices: ['their father', 'their mother', 'their siblings', 'their playmates'],
    correctChoice: 1,
    feedback: 'Because of their free love culture, male bonobos cannot be sure which babies are theirs, so baby bonobos share incredibly close bonds with their mothers!'
  },

  //Question 10
  {
    question: 'What values characterize the overarching culture of bonobos?',
    imgSrc: 'images/bonobo-q10.jpeg',
    imgAlt: "Bonobos sharing fruit",
    choices: ['power and control', 'violence and territorial aggression', 'fun and anarchy', 'cooperation and peace'],
    correctChoice: 3,
    feedback: 'Bonobos live in peaceful communities which value love and cooperation!'
  }
];

  let currentQuestionNumber = 0;
  const totalQNumberOfQuestions = store.length;
  let totalNumberCorrect = 0;

  /*This came from the starter code, so I need to keep it in mind.
  quizStarted: false,
  questionNumber: 0,
  score: 0
  */


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



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


/* 
  
  
*/