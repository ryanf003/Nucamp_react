class Student{
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp{
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students; 
    }
    registerStudent(student){
        if (this.students.includes(student)){
            console.log("This student already exists.");
        } else {
            console.log('Registering ' + student.email + ' to the Bootcamp ' + this.name);
            this.students.push(student);
        }
        return this.students;
    }
}

const student1 = new Student("Ryan", "ryan@nucamp.com", "San Jose");
const fullStack = new Bootcamp("Full Stack Web Development", "10");

fullStack.registerStudent(student1);
fullStack.registerStudent(student1);