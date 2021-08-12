//All students with an average grade higher than 3

let avgGradeHigherThan3 = students.filter (student => student.averageGrade > 3)
//console.log(avgGradeHigherThan3);

//All female student names with an average grade of 5

let fmaleAvarage5 = students.filter(student => student.gender === "Female")
    .filter(student => student.averageGrade===5)
    .map(student => student.firstName)
//console.log(fmaleAvarage5);

//All male student full names who live in Skopje and are over 18 years old

let maleSkopje18 = students.filter (student => student.gender === "Male")
    .filter(student => student.city === "Skopje")
    .filter(student => student.age > 18)
    .map(student => `${student.firstName} ${student.lastName}`)
//console.log(maleSkopje18)


//The average grades of all female students over the age  of 24

avgGradeF24 = students.filter(student => student.gender ==="Female")
    .filter(student => student.age > 24)
    .map(student => {
        return{
            Name: student.firstName,
            avgGrade: student.averageGrade 
        }
    })
//console.log(avgGradeF24)

//All male students with a name starting with B and average grade over 2

let nameB = students.filter(student=>student.gender === "Male" )
    .filter(student => student.averageGrade >2)
    //.map(student => student.firstName)
    .filter(student => student.firstName.startsWith("B"))
console.log(nameB)