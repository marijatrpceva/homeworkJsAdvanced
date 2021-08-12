const selections = { 
    "0": "search-bycountry-name",
    "1": "search-by-country-capitol"
}


function App() {
    
    this.dataProcessingService = new DataProcessingService();
    this.result = document.getElementById('result');
    this.allCountries = document.getElementById("allCountries");
    this.searchBtn = document.getElementById("searchBtn");
    this.searchInput = document.getElementById("searchInput");
    console.log(this.searchInput)
    this.searchSelection = document.getElementById("searchSelection")
    this.searchselection = "0"
    
    this.init = function() {
        //let that = this
        console.log("Rabote")
        this.allCountries.addEventListener("click", () => {
            this.dataProcessingService.getAllCountries(this.result); 
            
        });
        this.searchBtn.addEventListener("click", () => {
            this.searchByselection();
        });

        this.searchInput.addEventListener("keyup", (event) => {
           this.searchByselection();
        })

        this.searchSelection.addEventListener("change",(event) => {
            this.searchSelection = event.target.value;
        }); 

        
    }
    this.searchByselection = function() {
        let name = this.searchInput.value;
        switch(selections[this.searchSelection]) {
            case selections[0]:
                console.log(name)
                this.dataProcessingService.searchCountriesByName(name,this.result );
                break;
            case selections[1]:
                this.dataProcessingService.searchCountriesByCapitolName(name,this.result)
                break
            default:
                console.log("ERROR");
        }
    }
}

function DataProcessingService() {
    this.apiService = new ApiService();

    this.getAllCountries = function(element) {
        this.apiService.getAll()
            .then(response => response.json())
            .then(data => this.mapCountries(data))
            .then(countries => this.showCountries(countries, element))
            .catch(error => {
                console.log(error)
            });
    };

    this.searchCountriesByName = function(name,element) {
        this.apiService.searchByName(name)
        .then(data => this.mapCountries(data))
        .then(countries => this.showCountries(countries,element))
        .catch(error => {
            console.log(error)
        })
    }
  
    this.searchCountriesByCapitolName = async function(capitol,element) {
        let data = await this.apiService.searchByCapitolName(capitol);
        let countries = await this.mapCountries(data)
        this.showCountries(countries,element)
    }
    

    this.mapCountries = function(countries) {
       
        return new Promise((resolve, reject) => {
            if (!countries || countries.length === 0) {
                reject("something wrong")
            }
            let mapedCountries = countries.map(country => {
                return {
                    name: country.name,
                    capital: country.capital,
                    flag: country.flag,
                    area: country.area,
                    population: country.population

                }
            });
            resolve(mapedCountries);
        });
    }

    this.showCountries = function(countries, element) {
        element.innerHTML = 0;
        let html = `<div class = "row">`;
        for(let country of countries) {
            let col = `<div class= "coll-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${country.flag}" height="200" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text">
                        Capita: ${country.capital}
                        Population: ${country.population}
                        Area: ${country.area}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
            html += col
        }
        html += "</div>"
        element.innerHTML= html;
    }   

    

}

function ApiService() {
    this.baseUrl = "https://restcountries.eu/rest/v2/";

    this.getAll = function() {
        let url = `${this.baseUrl}all`
        return fetch(url); // vrakja promise

    };

    this.searchByName = function(name) {
        let url = `${this.baseUrl}name/${name}`;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })
        });
    };
    
    this.searchByCapitolName = async function(capital) {
        let url = `${this.baseUrl}capital/${capital}`;
        let response = await fetch(url);
        return await response.json()
    }
}


let app = new App();
app.init()