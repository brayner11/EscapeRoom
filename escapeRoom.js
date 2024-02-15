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

You find yourself trapped in a mysterious room with only one way out - by solving a series of challenging puzzles. Your wit and creativity will be your keys to freedom. Can you escape?

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

const questions = {
  Easy: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Easy Puzzle 1: What color is the sky?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'blue';
        console.log(isCorrect ? 'Correct! You earned 10 points.' : 'Incorrect answer! Try again.');
        return isCorrect || 'Incorrect answer! Try again.';
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Easy Puzzle 2: If you're running in a race and you pass the person in second place, what place are you in?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'second place';
        console.log(isCorrect ? 'Correct! You earned 10 points.' : 'Incorrect answer! Try again.');
        return isCorrect || 'Incorrect answer! Try again.';
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Easy Puzzle 3: David's parents have three sons: Snap, Crackle, and what's the name of the third son?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'david';
        console.log(isCorrect ? 'Correct! You earned 10 points.' : 'Incorrect answer! Try again.');
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
        console.log(isCorrect ? 'Correct! You earned 20 points.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Medium Puzzle 2: What month of the year has 28 days?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'all of them';
        console.log(isCorrect ? 'Correct! You earned 20 points.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Medium Puzzle 3: Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'five';
        console.log(isCorrect ? 'Correct! You earned 20 points.' : 'Incorrect answer! Try again.');
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
        console.log(isCorrect ? 'Correct! You earned 30 points.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Hard Puzzle 2: Forward I'm heavy, but backward I'm not. What am I?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'ton';
        console.log(isCorrect ? 'Correct! You earned 30 points.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Hard Puzzle 3: What gets wet while drying?",
      validate: function (answer) {
        const isCorrect = answer.toLowerCase() === 'a towel';
        console.log(isCorrect ? 'Correct! You earned 30 points.' : 'Incorrect answer! Try again.');
        return isCorrect;
      },
    },
  ],
};

const displayIntroduction = () => {
  console.log(introMessage);
};

const calculateTotalPoints = (answers, difficulty) => {
  const requiredPoints = {
    Easy: 30,
    Medium: 40,
    Hard: 90,
  };

  const totalPoints = Object.values(answers).reduce((total, answer) => {
    return total + (answer.points || 0);
  }, 0);

  return totalPoints >= requiredPoints[difficulty];
};

const displayDifficultyMessage = (difficulty) => {
  const requiredPoints = {
    Easy: 30,
    Medium: 40,
    Hard: 90,
  };
  console.log(`To escape the ${difficulty} difficulty, you need ${requiredPoints[difficulty]} points.`);
};

const playEscapeRoom = async () => {
  let proceedToNextDifficulty = true;

  while (proceedToNextDifficulty) {
    const difficulty = await inquirer.prompt(difficultyLevels);
    console.log(`You've chosen ${difficulty.difficulty} difficulty.`);
    displayDifficultyMessage(difficulty.difficulty);
    displayIntroduction();

    try {
      const selectedQuestions = questions[difficulty.difficulty];
      const answers = {};

      for (const question of selectedQuestions) {
        let isCorrect = false;
        while (!isCorrect) {
          const answer = await inquirer.prompt([question]);
          isCorrect = answer[question.name];
          answers[question.name] = isCorrect;
        }
      }

      if (calculateTotalPoints(answers, difficulty.difficulty)) {
        console.log(`Congratulations! You escaped the ${difficulty.difficulty} room with enough points!`);
      } else {
        console.log(`Sorry, you could not escape the ${difficulty.difficulty} room. Better luck next time!`);
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
