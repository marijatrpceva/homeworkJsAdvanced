function Student (firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function() {
        return birthYear - new Date().getFullYear;
    }

    this.getInfo = function(){
        return `This is student${firstName} ${lastName} from the academy ${academy}`
    }

    this.getGradesAverage = function() {
        counter = 0;
        let avg= 0;
        for (let grade of grades) {
            avg = (avg + grade) 
            counter = counter + 1          
        }
        return avg/counter
    }
}

students = [];



document.getElementById("btn").addEventListener("click", function() {
    let firstName = document.getElementById("fName").value
    let lastName = document.getElementById("lName").value;
    let bYear = document.getElementById("bYear").value;
    let academy = document.getElementById("academy").value
    let student = new Student(firstName, lastName, bYear, academy)
    
    students.push(student);
    console.log (students);

})