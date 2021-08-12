function Acdaemy() {
    this.name = "SEDC";
    this.students = ["Marija","Ana","Bojan"];
    this.subjects = ["Math","Bio","Science"];
    this.start = new Date(01/01/2021);
    this.end = new Date(01/06/2022);
    this.numberOfClasses = this.subjects.length*10;

    this.printStudents = function() {
    this.students.forEach(student => console.log(student));
}
    this.printSubjects = function() {
        this.subjects.forEach(subject => console.log(subject));
    }
}


function Subjectt() {
    this.title = "Math";
    this.numberOfClasses = 10;
    this.isElective = true;
    this.academy = academy;
    student = ["eden","dva"]
    this.overrideClasses = function(number) {
        this.numberOfClasses === number >=3? number: "Not a valid number!" ;
    }
}

function Student() {
    this.firstName = "ina";
    this.lastNAme = "Trpcheva";
    this.age = 25;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function() {
        this.academy = academy;
        //console.log(this.academy);
        academy.students.push(this.firstName)
    }
    this.startSubject = function(subject) {
        //console.log(this.academy)
        for(let sub of academy.subjects) {
            if (this.academy && subject.title == sub) {
                console.log("all good");
                this.currentSubject = subject;
                console.log(this.currentSubject)
            }
        }
        if (this.currentSubject === null) {
            console.log("No such subject")
        }

        subject.students.push(this.firstName)
    }
}

let academy = new Acdaemy();
academy.printStudents();
let student = new Student();
student.startAcademy()
let subject = new Subjectt();
student.startSubject(subject)
console.log(academy.students)

