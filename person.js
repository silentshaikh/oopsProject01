export default class Person {
    personality;
    constructor(personality) {
        this.personality = personality;
        // constructor property assignment
        this.personality = "Mystery";
    }
    askQuoestion(ans) {
        if (ans === 1) {
            this.personality = "Extravert";
        }
        else if (ans === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    get getPersonality() {
        return this.personality;
    }
}
;
