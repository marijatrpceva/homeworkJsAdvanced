function App() {
    this.dataProcessingService = new DataProcessingService()
    this.dataProcessingService.showData();
    this.selector = "0"
    this.dataProcessingService.sortByName();
    this.searchInput = document.getElementById("searchInput");
    this.searchBtn = document.getElementById("searchBtn");
    this.showSelection = document.getElementById("searchSelection")

    this.init = function() {
        this.showSelection.addEventListener("change",(event)=> {
            if(event.target.value === "1") {
                this.dataProcessingService.sortByNo();
            }
            if(event.target.value === "0") {
                this.dataProcessingService.sortByName();
            }
           
        })

        this.searchBtn.addEventListener("click", () => {
            let inVal = this.searchInput.value;
            this.dataProcessingService.searchByName(inVal)
        })
    }
    


}

function DataProcessingService() {

    this.apiService = new ApiService();

    this.showData= function() {
        this.apiService.fetchData()
        .then(response => response.json())
        .then(data => this.manageData(data) )
        .catch(error => console.log(error))
    }

    this.sortByNo= function() {
        this.apiService.fetchData()
        .then(response => response.json())
        .then(data => {
          let sorted =   data.sort((a,b) => b.albums.length-a.albums.length)
          this.manageData(sorted)
        })
        .catch(error => console.log(error))
    }

    this.sortByName = function() {
        this.apiService.fetchData()
        .then(response => response.json())
        .then(data => {
            let sorted = data.sort((a,b) =>a.name.localeCompare(b.name))
            this.manageData(sorted)
        })
    }

    this.searchByName = function(inputName) {
        this.apiService.fetchData()
        .then(response => response.json())
        .then(data => {
            let thename = data.filter(val => val.name.toLowerCase()===inputName)
            this.manageData(thename)
        })
    }



    this.manageData = function(dat) {
        let tbody = document.getElementById("t-body");
        tbody.innerHTML = '';
        console.log(dat);
        let counter = 0;
        
        let allBandMem = [];
        let html = "";
        for( let band of dat) {
                counter++
                tbody.innerHTML+=`
                <tr>
                <th scope="row">${counter}</th>
                <td>${band.name}</td>
                <td><button style = background-color:${band.active? "green" : "red"}>${band.active? "Yes" : "No "}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => !member.former) //moze i so posebna funkcija
                .map(member=>member.name)}</td> 
                <td>${band.albums.length}</td> 
            </tr>`
        }

    }

}

function ApiService() {
    this.url= 'https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json';

    this.fetchData= function() {
         return fetch(this.url)
    }
    
}

let app = new App();
app.init()