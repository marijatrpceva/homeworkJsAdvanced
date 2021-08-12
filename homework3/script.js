$(document).ready(function() {

document.getElementById("getData").addEventListener("click", function() {
    $.ajax({
        url:"https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
        success: function(response) {
            let responseObject = JSON.parse(response);
            console.log(responseObject);
            let element= document.getElementById("title");
            element.innerHTML ="";
            element.innerHTML = `<h1>${responseObject.trainer}</h1>`;
            let list = document.getElementById("list");
            list.innerHTML = ""
            for (let i=0; i<responseObject.students.length; i++) {
                list.innerHTML+=
                `<li>${responseObject.students[i]}</li>`
            }
        },
        error: function(error) {
            console.log("bad request")
        }
    })

});

document.getElementById("starWars").addEventListener("click", function() {
    $.ajax({
        url:"https://swapi.dev/api/people/1",
        success: function(response) {
            console.log(response)
            let element = document.getElementById("title")
            element.innerHTML = `<h1>${response.name}<h1>`

            let table = document.getElementById("table")
            table.style.border= "1px solid black"
            table.style.width = "200px"

           let i = ["Height","Weight" , "Eye color", "Hair color"]
           let jj = [response.height, response.mass, response.hair_color, response.eye_color];
            var tr= document.createElement('tr')
            for (let ii of i) {
                var th= document.createElement('th');
                var text = document.createTextNode(ii);
                th.appendChild(text);
                tr.appendChild(th);
                table.appendChild(tr);
            }
            var tr= document.createElement('tr')
            for (let j of jj ) {
                var td= document.createElement('td');
                var text = document.createTextNode(j);
                td.appendChild(text);
                tr.appendChild(td);
                table.appendChild(tr);
            }
            
        },
        error:function(error) {

        }
    })
})

})

