import inquirer from "inquirer";
export default class Person{
    constructor(private personality:string) {
        // constructor property assignment
        this.personality = "Mystery";
    }
    askQuoestion(ans:number){
        if(ans===1){
            this.personality = "Extravert";
        }else if(ans===2){
            this.personality = "Introvert";   
        }else{
            this.personality = "You are still a Mystery";
        }
    }
    get getPersonality(){
        return this.personality;
    }
};