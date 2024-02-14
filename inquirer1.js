import inquirer from 'inquirer';
 
const func = async () => {
    let object = await inquirer.prompt({
        name: "result",
        type:"input",
        message:"What is your name?"
    })
    return object
}
 
 
 
const display = async () => {
 
    let response = await func()
    console.log(response)
}
 
display();