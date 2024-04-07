#! /usr/bin/env node
import inquirer from "inquirer"

let todos = []
let condition = true;
while(condition){

let todosquestions= await inquirer.prompt(
   
    [
    


     {
        name:"firstQuestion",
        type: "input",
        message: "what would you like to add in your todos?"
     },
     {
        name: "secondQuestion",
        type: "confirm",
        message:'would you like to add more in your todos?',
        default: "true"
        
     }
    ]
);
if (todosquestions.firstQuestion! == ''){
   todos.push(todosquestions.firstQuestion);
   console.log(todos);
}
else{
   console.log("please write something in your list");
}
todos.push(todosquestions.firstQuestion);
console.log(todos);
condition = todosquestions.secondQuestion;
}



