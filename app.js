'use strict';
const store = {

  questions: [

    //Question 1
    {
      question: 'Besides chimpanzees, which species are the closest primate cousins to bonobos?',
      imgSrc: 'images/bonobo-q1.jpg',
      imgAlt: "Primate cousins diagram",
      answers: ['orangutans', 'gorillas', 'humans', 'capuchin monkeys'],
      correctAnswer: 'humans',
    },

    //Question 2
    {
      question: 'How much of our DNA do we share with bonobos?',
      imgSrc: 'images/bonobo-q2.jpg',
      imgAlt: "Woman face to face with baby bonobo",
      answers: ['86.2%', '95.3%', '98.7%', '99.4%'],
      correctAnswer: '98.7%',
    },

    //Question 3
    {
      question: 'What sexual identity most closely matches the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q3.jpeg',
      imgAlt: "Bonobos kissing",
      answers: ['heterosexual', 'asexual', 'homosexual', 'pansexual'],
      correctAnswer: 'pansexual',
    },

    //Question 4
    {
      question: 'What kind of love relationships most closely match the bonobo lifestyle?',
      imgSrc: 'images/bonobo-q4.jpg',
      imgAlt: "Bonobo troop",
      answers: ['monogomous', 'bigamous', 'polygamous', 'polyamorous'],
      correctAnswer: 'polyamorous',
    },

    //Question 5
    {
      question: 'Who are the highest ranking members of bonobo society?',
      imgSrc: 'images/bonobo-q5.jpeg',
      imgAlt: "Bonobo matriarchs relaxing",
      answers: ['young females', 'old females', 'young males', 'old males'],
      correctAnswer: 'old females',
    },

    //Question 6
    {
      question: 'Where is the Ape Cognition & Conservation Initiative (formerly Great Ape Trust) located?',
      imgSrc: 'images/bonobo-q6.jpeg',
      imgAlt: "Ape Initiative Logo",
      answers: ['Iowa', 'New York', 'California', 'Tennesee'],
      correctAnswer: 'Iowa',
    },

    //Question 7
    {
      question: 'Kanzi lives at the Ape Cognition & Conservation Initiative. How many words were in his vocabulary in 2018, according to the Des Moines Register?',
      imgSrc: 'images/bonobo-q7.jpeg',
      imgAlt: "Kanzi the bonobo looking into the camera",
      answers: ['1,000', '2,000', '3,000', '4,000'],
      correctAnswer: '3,000',
    },

    //Question 8
    {
      question: 'Which of the following is NOT a way that bonobos communicate at the Ape Cognition & Conservation Initiative?',
      imgSrc: 'images/bonobo-q8.jpeg',
      imgAlt: "Bonobos using lexigram keyboard with a scientist in a tie dye shirt",
      answers: ['typing simple words on a qwerty keyboard', 'hand gestures', 'vocalization', 'selecting symbols on a lexigram keyboard'],
      correctAnswer: 'typing simple words on a qwerty keyboard',
    },

    //Question 9
    {
      question: 'With whom do baby bonobos have the closest bonds?',
      imgSrc: 'images/bonobo-q9.jpeg',
      imgAlt: "Mama and baby bonobo sleeping",
      answers: ['their father', 'their mother', 'their siblings', 'their playmates'],
      correctAnswer: 'their mother',
    },

    //Question 10
    {
      question: 'What values characterize the overarching culture of bonobos?',
      imgSrc: 'images/bonobo-q10.jpeg',
      imgAlt: "Bonobos sharing fruit",
      answers: ['power and control', 'violence and territorial aggression', 'fun and anarchy', 'cooperation and peace'],
      correctAnswer: 'cooperation and peace',
    },

  ],

  quizStarted: false,
  currentQuestion: 0,
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

//Start Screen
function startScreen() {
  return `
  <div class="start-screen">
    <img src="images/bonobo-start-image.jpeg" alt="Bonobo staring into camera">
    <p> How much do you know about this loveable primate? </p> 
    <p> Click START to find out!</p>
    <button id="start" type='submit'>START</button>
  </div>
  `;
}

//function to show the number and score
function questionNumberAndScore() {
  return `
  <ul class="question-and-score">
    <li id="question-number">
      Question Number: ${store.currentQuestion + 1}/${store.questions.length}
    </li>
    <li id="score">
      Score: ${store.score}/${store.questions.length}
    </li>
  </ul>
`;
}

//function to set up the answer options
function listAnswers() {
  const answersArray = store.questions[store.currentQuestion].answers
  let answersHtml = '';
  let i = 0;

  answersArray.forEach(answer => {
    answersHtml += `
      <div id="option-container-${i}">
        <input type="radio" class="options" name="options" id="option${i + 1}" value= "${answer}" tabindex ="${i + 1}" required> 
        <label for="option${i + 1}"> ${answer}</label>
      </div>
    `;
    i++;
  });
  return answersHtml;
}

//function to show a question

function questionScreen() {
  let currentQuestion = store.questions[store.currentQuestion];
  return `
    <form id="question-form" class="question-form">
      <fieldset>
        <div class="question">
          <p> ${currentQuestion.question}</p>
        </div>
        <div class="image-wrapper">
          <img src="${currentQuestion.imgSrc}" alt="${currentQuestion.imgAlt}">
        </div>
        <div class="options">
          <div class="answers">
            ${listAnswers()}
          </div>
        </div>
        <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
      </fieldset>
    </form >
  `;
}

//function to show results screen
function resultsScreen() {
  return `
  <div class="image-wrapper">
    <img src = 'images/bonobo-results.jpeg' alt="Adorable baby bonobo">
  </div>
  <div class="results">  
    <form id="js-restart-quiz">
      <fieldset>
        <div class="row">
          <div>
            <p>Final Score: ${store.score}/${store.questions.length}</p>
          </div>
        </div>
        <div class="row">
          <div>
            <button type="submit" id="restart"> Try Again? </button>            
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `;
}

//function to show the user a message about whether they are correct or incorrect and provide the correct answer 
function generateFeedbackHTML(answerStatus) {
  let correctAnswer = store.questions[store.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">Correct! +1</div>
    <button type="submit" id="next-question-btn" tabindex="6"> Next &gt;></button>
    `;
  }
  else if (answerStatus === 'incorrect') {
    html = `
      <div class="wrong-answer">Incorrect. The correct answer is ${correctAnswer}.</div>
      <button type="submit" id="next-question-btn" tabindex="6"> Next &gt;></button>
    `;
  }
  return html;
}

/********** RENDER FUNCTION **********/

/**
 * All-purpose render function that will conditionally 
 * render the page based upon the state of the STORE.
 */
function render() {
  let html = '';

  if (store.quizStarted === false) {
    $('main').html(startScreen());
    return;
  }
  else if (store.currentQuestion >= 0 && store.currentQuestion < store.questions.length) {
    html = questionNumberAndScore();
    html += questionScreen();
    $('main').html(html);
  }
  else {
    $('main').html(resultsScreen());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

/**
 * Handles a click of the quiz's start button
 */
function handleStartClick() {
  $('main').on('click', '#start', function (event) {
    store.quizStarted = true;
    render();
  });
}

/**
 * Handles the click of the "next" button
 */
function handleNextQuestionClick() {
  $('body').on('click', '#next-question-btn', (event) => {
    render();
  });
}

/**
 * Handles the submission of the question form
 */
function handleQuestionFormSubmission() {
  $('body').on('submit', '#question-form', function (event) {
    event.preventDefault();
    const currentQuestion = store.questions[store.currentQuestion];

    // get value from checkbox checked by user
    let selectedOption = $('input[name=options]:checked').val();

    //adds 1 to the score if they are correct, tells generateFeedbackHTML which feedback to give, and puts the feedback under the answer choices.
    if (selectedOption === currentQuestion.correctAnswer) {
      store.score++;
      $('.answers').append(generateFeedbackHTML('correct'));
    }
    else {
      $('.answers').append(generateFeedbackHTML('incorrect'));
    }
    //replaces the Submit button with a Next button.
    store.currentQuestion++;
    // hide the submit button
    $('#submit-answer-btn').hide();
    // disable all inputs
    $('input[type=radio]').each(() => {
      $('input[type=radio]').attr('disabled', true);
    });
    // show the next button
    $('#next-question-btn').show();

  });
}
/**
 * Resets all values to prepare to restart quiz
 */
function restartQuiz() {
  store.quizStarted = false;
  store.currentQuestion = 0;
  store.score = 0;
}

function handleRestartButtonClick() {
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);


