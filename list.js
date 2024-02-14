import inquirer from 'inquirer';
 
const func = async () => {
    let object = await inquirer.prompt({
        name: "result",
        type:"list",
        message:"Which is your favourite colour?",
        choices: ["red", "blue", "green"]
    })
    return result
}
 
 
 
const display = async () => {
 
    let response = await func()
    console.log(response)
}
 
display();