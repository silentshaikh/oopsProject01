#! /usr/bin/env node
import inquirer from "inquirer";
import Person from "./person.js";
import Student from "./student.js";
class Program{
     static async main(){
            let userInput:{
                input:string
            } = await inquirer.prompt([
                {name:"input",message:"Type 1 if you like to talk to other and Type 2 if you would rather keep to yourself: ",type:"string"}
            ]);
            let ourPerson:Person = new Person("");
            let onlyNum = /[0-9]/g;
            if(!userInput.input || !userInput.input.match(onlyNum)){
                while(userInput.input === "" || !userInput.input.match(onlyNum)){
                    console.log("Please Enter only a Number")
                    userInput = await inquirer.prompt([
                        {name:"input",message:"Type 1 if you like to talk to other and Type 2 if you would rather keep to yourself: ",type:"string"}
                    ]);
            }
        }else{
                ourPerson.askQuoestion(+userInput.input); 
            console.log(`You are : ${ourPerson.getPersonality}`);
            }
            let userName:{
                name:string
            } = await inquirer.prompt([
                {name:"name",message:"What is your name: ",type:"input"}
            ]);
           let regMatch = /[a-zA-Z]+/g;
            if(!userName.name || !userName.name.match(regMatch)){
                while(userName.name === "" || !userName.name.match(regMatch)){
                    console.log("Please Enter Your Name and only Name :");
                    userName = await inquirer.prompt([
                        {name:"name",message:"What is your name: ",type:"string"}
                    ]);

                }
            }
                let ourStudent:Student = new Student(userName.name,"");
                console.log(`Your Name is ${ourStudent.getName} and your personality is ${ourStudent.getPersonality}`);
    }
};
Program.main()