export class RobotName {
    name : string;
    listOfUsedNames : string[] = []
    constructor(){
        this.name = this.generateName();
    }

    generateName(): string{
        let letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
        let numbers = "1234567890"
        let newName = ""
        newName += letters[this.getRandomNumber(letters.length)]
        newName += letters[this.getRandomNumber(letters.length)]
        newName += numbers[this.getRandomNumber(numbers.length)]
        newName += numbers[this.getRandomNumber(numbers.length)]
        newName += numbers[this.getRandomNumber(numbers.length)]
        if(newName in this.listOfUsedNames){
            this.generateName()
        }
        this.listOfUsedNames.push(newName)
        return newName
    }

    getRandomNumber(size: number): number{
        return Math.floor(Math.random() * (size))
    }

    resetName(): void{
        this.name = this.generateName()
    }
}