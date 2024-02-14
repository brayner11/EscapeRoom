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


const questions = [
    {
      type: 'input',
      name: 'puzzle1',
      message: "Puzzle 1: If you're running in a race and you pass the person in second place, what place are you in?",
      validate: function (answer) {
        return answer.toLowerCase() === 'second place' || 'Incorrect answer! Try again.';
      }
    },
    {
      type: 'input',
      name: 'puzzle2',
      message: "Puzzle 2: David's parents have three sons: Snap, Crackle, and what's the name of the third son?",
      validate: function (answer) {
        return answer.toLowerCase() === 'david' || 'Incorrect answer! Try again.';
      }
    },
    {
      type: 'input',
      name: 'puzzle3',
      message: "Puzzle 3: What month of the year has 28 days?",
      validate: function (answer) {
        return answer.toLowerCase() === 'all of them' || 'Incorrect answer! Try again.';
      }
    },
    {
      type: 'input',
      name: 'puzzle4',
      message: "Puzzle 4: What gets wet while drying?",
      validate: function (answer) {
        return answer.toLowerCase() === 'a towel' || 'Incorrect answer! Try again.';
      }
    },
  ];

const displayIntroduction = () => {
  console.log(introMessage);
};

const playEscapeRoom = async () => {
  displayIntroduction();
  try {
    const answers = await inquirer.prompt(questions);
    console.log('Congratulations! You escaped the room!');
  } catch (error) {
    console.log('Sorry, you could not escape. Better luck next time!');
  }
};

playEscapeRoom();
