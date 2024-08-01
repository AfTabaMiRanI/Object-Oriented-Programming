#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await select({
            message: "Whom would you like to interact with?",
            choices: [
                {
                    name: "staff",
                    value: "staff"
                },
                {
                    name: "student",
                    value: "student"
                },
                {
                    name: "exit",
                    value: "exit"
                },
            ]
        });
        if (ans == "staff") {
            console.log("You approach the staff room. Please feel free to ask any question.");
        }
        else if (ans == "student") {
            const ans = await input({
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans);
            if (!student) {
                const name = new Student(ans);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
