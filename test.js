import inquirer from 'inquirer';

const introMessage = `
********  ********   ******      **     *******  ********   *******     *******     *******   ****     ****
/**/////  **//////   **////**    ****   /**////**/**/////   /**////**   **/////**   **/////** /**/**   **/**
/**      /**        **    //    **//**  /**   /**/**        /**   /**  **     //** **     //**/**//** ** /**
/******* /*********/**         **  //** /******* /*******   /*******  /**      /**/**      /**/** //***  /**
/**////  ////////**/**        **********/**////  /**////    /**///**  /**      /**/**      /**/**  //*   /**
/**             /**//**    **/**//////**/**      /**        /**  //** //**     ** //**     ** /**   /    /**
/******** ********  //****** /**     /**/**      /********  /**   //** //*******   //*******  /**        /**
//////// ////////    //////  //      // //       ////////   //     //   ///////     ///////   //         // 
Welcome to the Escape Room Adventure!

You find yourself trapped in a mysterious room with only one way out - by solving a series of challenging puzzles. Your wit and creativity will be your keys to freedom. choose the difficulty.Can you escape?

Get ready to embark on a thrilling journey of intellect and discovery. Pay attention to the details, think outside the box, and most importantly, enjoy the adventure.

Good luck! Your destiny awaits.
`;

const difficultyLevels = [
  {
    type: 'list',
    name: 'difficulty',
    message: 'Choose a difficulty level:',
    choices: ['Easy', 'Medium', 'Hard'],
  },
];

const hints = {
  Easy: [
    'Hint for Easy Puzzle 1: Look up during the day.',
    'Hint for Easy Puzzle 2: If you pass the person in second place, what is your new position?',
    "Hint for Easy Puzzle 3: The answer is in the question. Who are David's parents?",
  ],
  Medium: [
    'Hint for Medium Puzzle 1: Known as the "City of Love".',
    'Hint for Medium Puzzle 2: How many days does February have in a leap year?',
    'Hint for Medium Puzzle 3: Think about the relationships in the question.',
  ],
  Hard: [
    'Hint for Hard Puzzle 1: This city is known for deep-dish pizza and jazz.',
    'Hint for Hard Puzzle 2: Think about weight and direction.',
    'Hint for Hard Puzzle 3: What item gets damp while performing its task?',
  ],
};

const questions = {
  Easy: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Easy Puzzle 1: What color is the sky?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'blue';
        console.log(isCorrect ? ' Correct!' : 'Incorrect answer! Try again.');
        return isCorrect || 'Incorrect answer! Try again.';
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Easy Puzzle 2: If you're running in a race and you pass the person in second place, what place are you in?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'second place';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect || 'Incorrect answer! Try again.';
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Easy Puzzle 3: David's parents have three sons: Snap, Crackle, and what's the name of the third son?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'david';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect || 'Incorrect answer! Try again.';
      },
    },
  ],
  Medium: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Medium Puzzle 1: What is the capital of France?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'paris';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Medium Puzzle 2: What month of the year has 28 days?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'all of them';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Medium Puzzle 3: Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'five';
        console.log(isCorrect ? ' Correct!.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
  ],
  Hard: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Hard Puzzle 1: What is 3/7 chicken, 2/3 cat and 2/4 goat?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'chicago';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Hard Puzzle 2: Forward I'm heavy, but backward I'm not. What am I?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'ton';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Hard Puzzle 3: What gets wet while drying?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'a towel';
        console.log(isCorrect ? ' Correct' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
  ],
};

const narrativeBranches = {
  positive: [
    'Congratulations! You successfully escaped the room and uncovered the hidden treasure.',
    'As you step out, you find yourself in a beautiful garden. Your adventure continues...',
  ],
  negative: [
    "Sorry, you couldn't escape the room. The walls seem to close in on you...",
    "Suddenly, a mysterious figure appears. 'You're trapped forever,' they whisper. The end.",
  ],
};

const displayIntroduction = () => {
  console.log(introMessage);
};

const provideHint = (difficulty, questionIndex) => {
  if (hints[difficulty] && hints[difficulty][questionIndex]) {
    console.log(`Hint: ${hints[difficulty][questionIndex]}`);
  } else {
    console.log('No hints available for this question.');
  }
};

const playEscapeRoom = async () => {
  let proceedToNextDifficulty = true;

  while (proceedToNextDifficulty) {
    const difficulty = await inquirer.prompt(difficultyLevels);
    console.log(`You've chosen ${difficulty.difficulty} difficulty.`);
    displayIntroduction();

    try {
      const selectedQuestions = questions[difficulty.difficulty];
      const answers = {};

      for (let i = 0; i < selectedQuestions.length; i++) {
        let isCorrect = false;
        let attempts = 0;

        while (!isCorrect && attempts < 3) {
          const answer = await inquirer.prompt([selectedQuestions[i]]);
          isCorrect = answer[selectedQuestions[i].name];

          if (!isCorrect) {
            attempts++;

            const hintPrompt = await inquirer.prompt({
              type: 'confirm',
              name: 'useHint',
              message: 'Would you like a hint?',
            });

            if (hintPrompt.useHint) {
              provideHint(difficulty.difficulty, i);
            }

            console.log(`Incorrect answer! Attempts left: ${3 - attempts}`);
          }
        }

        answers[selectedQuestions[i].name] = isCorrect;

        if (!isCorrect) {
          console.log('Sorry, you could not solve the puzzle. Better luck next time!');
          break; // Break out of the loop if the answer is incorrect
        }
      }

      if (Object.values(answers).every((answer) => answer)) {
        console.log(narrativeBranches.positive.join('\n'));
      } else {
        console.log(narrativeBranches.negative.join('\n'));
        proceedToNextDifficulty = false;
      }

      // Ask if the user wants to proceed to the next difficulty
      if (proceedToNextDifficulty) {
        const nextDifficultyPrompt = await inquirer.prompt({
          type: 'confirm',
          name: 'proceedToNextDifficulty',
          message: 'Do you want to proceed to the next difficulty level?',
        });

        proceedToNextDifficulty = nextDifficultyPrompt.proceedToNextDifficulty;
      }
    } catch (error) {
      console.log('Sorry, an error occurred. Better luck next time!');
      proceedToNextDifficulty = false;
    }
  }
};

playEscapeRoom();