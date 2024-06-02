import Person from "./person.js";
export default class Student extends Person {
    name;
    constructor(name, personality) {
        super(personality);
        this.name = name;
    }
    ;
    get getName() {
        return this.name;
    }
}
;
