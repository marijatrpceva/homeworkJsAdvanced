//Adding the functionalities of the app, what it should do as seperate func.
let stopWatch = {
    time: 0,
    intValId : null,
    start: function() {
        this.intValId = setInterval(() => {
            this.time++;
            console.log(this.time);
            ui.printResult();
        }, 1000 )
    },

    reset: function () {
        if (this.intValId) {
            clearInterval(this.intValId)
            this.time = 0;
        }
        this.time = 0;
        
    },
    stop: function () {
        clearInterval(this.intValId)
        this.intValId = null;
    }
}

//navigating the start end stop btn and adding event listeners(this can be done first)
let navigation = {
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    startTimer: function() {
        this.start.addEventListener("click", function() {
            stopWatch.start();
        })
        this.stop.addEventListener("click", function() {
            stopWatch.stop();
        })
    }
}

let ui= {
    result : document.getElementById("result"),
    printResult: function() {
        this.result.innerHTML = "";
        this.result.innerHTML= stopWatch.time;
    }
}

navigation.startTimer();