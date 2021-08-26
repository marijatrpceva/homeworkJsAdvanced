function App() {
    this.dataProcessingService = new DataProcessingService();
    this.apiService = new ApiService();
    this.allBeers = document.getElementById("allBeers");
    this.result = document.getElementById("result")
    this.search = document.getElementById("searchInput");
    this.searchBtn = document.getElementById("searchBtn");
    this.selectionList = document.getElementById("searchSelection")
    this.randomBeer = document.getElementById("random")
    this.searchSelection = "25"
    this.homePage = document.getElementById("result")
    this.homeBtn = document.getElementById("home")
    this.prevBtn = document.getElementById("prev");
    this.nextBtn = document.getElementById("next")
    this.pageNum = 1;
    this.paginationBut = document.getElementById("pag")
    this.paginationBut.style.display= "none"


    this.init = function() {
        console.log("Our app is working")
        
        this.allBeers.addEventListener("click" , () => {
            this.dataProcessingService.getAllBeers(this.result)
            this.dataProcessingService.conaolw()
            this.paginationBut.style.display= "block"
        })
        this.searchBtn.addEventListener("click", ()=> {
            let name = this.search.value
            this.dataProcessingService.searchBeersByName(name,this.result)
        })
        // this.search.addEventListener("keyup",() => {
        //     let name = this.search.value;
        //     this.dataProcessingService.searchBeersByName(name,this.result)
        // })
        this.selectionList.addEventListener("change",(event) => {
            this.searchSelection = event.target.value;
            console.log(this.searchSelection);
           // this.apiService.showFromSelection(this.searchSelection)
           this.dataProcessingService.showBeersFromSelection(this.searchSelection,this.result,this.pageNum);
        }); 
        this.randomBeer.addEventListener("click", () => {
            this.dataProcessingService.getRandomBeer(this.result);
            //console.log(this.result)
        }) 
        this.homeBtn.addEventListener("click",() => {
            this.homePage.style.display = "none"
        })

        this.prevBtn.addEventListener("click",() => {
            console.log("prev")
            if (this.pageNum<1) {
                return;
            }
            this.pageNum--;
            this.dataProcessingService.showPrevOrNext(this.searchSelection,this.pageNum,this.result)

        })

        this.nextBtn.addEventListener("click",() => {
            console.log("next")
            this.pageNum++
            this.dataProcessingService.showPrevOrNext(this.searchSelection,this.pageNum,this.result)
            
        })
        
    }
}

function DataProcessingService() {
    this.apiService = new ApiService();
    
    this.conaolw = function() {
        this.apiService.getAllData()
        .then(response => response.json())
        .then(data => console.log(data))
    }

    this.getAllBeers = function(element) {
        this.apiService.getAllData()
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => this.showBeers(beers,element))
        .catch(() => console.log("SOmthing not"))
    }

    this.searchBeersByName = function(name,element) {
        this.apiService.searchByName(name)
        .then(response => response.json())
        .then(data => this.mapBeers(data) )
        .then(beers => this.showBeers(beers,element))
    }
   
    this.showBeersFromSelection = function(number,element,pageNum) {
        this.apiService.showFromSelection(number,pageNum)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => this.showBeers(beers,element))


    }

    this.getRandomBeer = function(element) {
        this.apiService.getRandomBeer()
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beer => this.showRandomBeer(beer, element))
    }

    this.showPrevOrNext = function(searchSelection,pageNum,element) {
        this.apiService.showFromSelection(searchSelection,pageNum)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => this.showBeers(beers,element))
    }

    this.mapBeers = function(beers) {

       return new Promise((resolve,reject) => {
           if (!beers || beers.length === 0) {
               reject ("Something is wrong")
           }
           let mapedBeer = beers.map(beer => {
            return {
                name: beer.name,
                img: beer.image_url,
                alcohol:beer.abv,
                bitternes:beer.ibu,
                desc: beer.description
            }
        })
        resolve (mapedBeer);
       })
       
    }

    this.showBeers = function(beers, element) {
        element.innerHTML = "";
        let html = `<div class = "row" >`;
        for(let beer of beers) {
            //console.log(beer)
            let col = `<div class= "col-md-4" style="margin-bottom:18px">
                <div class="card " style="width: 18rem;">
                    <img src="${beer.img}" height="300" class="card-img-top pic pt=2" alt="...">
                    <div class="card-body ">
                    <h5 class="card-title">${beer.name}</h5>
                    <p class="card-text scroll">
                        Description: ${beer.desc}
                        Alcohol: ${beer.alcohol} %
                        Bitterness : ${beer.bitternes}
                       
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
    this.showRandomBeer = function(beers,element) {
        //console.log(beer)
        element.innerHTML = "";
        let html = `<div class = "row ">`;
        for(let beer of beers) {
            //console.log(beer)
            let col = `
                <div class="card mb-3 " style = "background-color:rgba(218, 138, 19, 0.301); border-color:brown "  >
                    <div class="row no-gutters ">
                        <div class="col-md-4 p-2 " >
                            <img src="${beer.img}" alt="${beer.desc}  " >
                        </div>
                        <div class="col-md-8">
                            <div class="card-body pl-5">
                                <h5 class="card-title  text-center">${beer.name}</h5></br>
                                <p class="card-text p-10 ">
                                    Description: ${beer.desc}<br/>
                                    Alcohol: ${beer.alcohol} %</br>
                                    Bitterness : ${beer.bitternes}
                                
                                </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
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
    this.baseUrl = 'https://api.punkapi.com/v2/';

    this.getAllData = function() {
        let url = `${this.baseUrl}beers`
        return fetch(url);
    }

    this.searchByName = function(name) {
        let url = `${this.baseUrl}beers?beer_name=${name}`
        return fetch(url);
    }
    this.showFromSelection =  function(number,pageNum) {
        let url = `${this.baseUrl}beers?page=${pageNum}&per_page=${number}`
        //console.log(url)
        // let response = await fetch(url);
        // return await response.json();
        return fetch(url)
        
    }

    this.getRandomBeer = function() {
        let url = `${this.baseUrl}beers/random`
        return fetch(url);
    }

}

let app = new App()
app.init()

