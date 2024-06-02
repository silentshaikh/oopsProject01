import inquirer from "inquirer";
import Person from "./person.js";
export default class Student extends Person{
    constructor(private name:string,personality:string) {
        super(personality)
    };
    get getName(){
        return this.name;
    }
};