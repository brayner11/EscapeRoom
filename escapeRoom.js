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
        return answer.toLowerCase() === 'blue' || 'Incorrect answer! Try again.';
      },
      points: 10,
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Easy Puzzle 2: If you're running in a race and you pass the person in second place, what place are you in?",
      validate: function (answer) {
        return answer.toLowerCase() === 'second place' || 'Incorrect answer! Try again.';
      },
      points: 10,
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Easy Puzzle 3: David's parents have three sons: Snap, Crackle, and what's the name of the third son?",
      validate: function (answer) {
        return answer.toLowerCase() === 'david' || 'Incorrect answer! Try again.';
      },
      points: 10,
    },
  ],
  Medium: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Medium Puzzle 1: What is the capital of France?",
      validate: function (answer) {
        return answer.toLowerCase() === 'paris' || 'Incorrect answer! Try again.';
      },
      points: 20,
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Medium Puzzle 2: What month of the year has 28 days?",
      validate: function (answer) {
        return answer.toLowerCase() === 'all of them' || 'Incorrect answer! Try again.';
      },
      points: 20,
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Medium Puzzle 3: Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?",
      validate: function (answer) {
        return answer.toLowerCase() === 'five' || 'Incorrect answer! Try again.';
      },
      points: 20,
    },
  ],
  Hard: [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Hard Puzzle 1: What is 3/7 chicken, 2/3 cat and 2/4 goat?",
      validate: function (answer) {
        return answer.toLowerCase() === 'Chicago' || 'Incorrect answer! Try again.';
      },
      points: 30,
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Hard Puzzle 2: Forward I'm heavy, but backward I'm not. What am I?",
      validate: function (answer) {
        return answer.toLowerCase() === 'ton' || 'Incorrect answer! Try again.';
      },
      points: 30,
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Hard Puzzle 3: What gets wet while drying?",
      validate: function (answer) {
        return answer.toLowerCase() === 'a towel' || 'Incorrect answer! Try again.';
      },
      points: 30,
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

const playEscapeRoom = async () => {
  const difficulty = await inquirer.prompt(difficultyLevels);
  console.log(`You've chosen ${difficulty.difficulty} difficulty.`);

  displayIntroduction();

  try {
    const selectedQuestions = questions[difficulty.difficulty];
    const answers = await inquirer.prompt(selectedQuestions);

    if (calculateTotalPoints(answers, difficulty.difficulty)) {
      console.log(`Congratulations! You escaped the room with enough points!`);
    } else {
      console.log('Sorry, you could not escape. Better luck next time!');
    }
  } catch (error) {
    console.log('Sorry, an error occurred. Better luck next time!');
  }
};

playEscapeRoom();
