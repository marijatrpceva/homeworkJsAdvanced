function Person(firstName,lastNAme,age,) {
    this.firstName = firstName;
    this.lastNAme = lastNAme;
    this.age = age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastNAme}`)
    }
}

function Student(firstName,lastNAme,age,academyName,studentId) {
    Object.setPrototypeOf(this,new Person(firstName,lastNAme,age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function() {
        console.log(`The student ${this.firstName} is studing in the ${this.academyName}`);
    }
}


// let student = new Student("Marija","Trp",25,"Web",5);
// console.log(student)
// student.getFullName()


function DesignStudent(firstName,lastNAme,age,academyName,studentId,isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName,lastNAme,age,academyName,studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobe.Exam = () => {
        console.log(`The student ${this.firstName} is doing adobe exam`)
    }
}

function CodeStudent(firstName,lastNAme,age,academyName,studentId,string) {
    Object.setPrototypeOf(this,new Student(firstName,lastNAme,age,academyName,studentId));
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.string = string
    this.doProjectType = () => {
        if (this.string === "individual") {
            this.hasIndividualProject = true;
        }
        if(this.string == "group") {
            this.hasGroupProject = true
            console.log("Has group projcet")
        }
    }
}

function NetworkStudent(firstName,lastNAme,age,academyName,studentId,academyPart) {
    Object.setPrototypeOf(this,new Student(firstName,lastNAme,age,academyName,studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function() {
        console.log(`The student ${firstName} is doing cisco exam`)
    }
}


let ann = new CodeStudent("Ana","Anevska",300,"code",123,"group")
console.log(ann)
ann.doProjectType()






