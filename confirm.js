import inquirer from 'inquirer';
 
const func = async () => {
    let { result } = await inquirer.prompt({
        name: "result",
        type:"confirm",
        message:"are you a vegetarian?",
    })
    return result
}
 
 
 
const display = async () => {
 
    let response = await func()
    console.log(response)
}
 
display();