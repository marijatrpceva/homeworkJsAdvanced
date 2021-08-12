let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let element = document.getElementById("result")
let currwntPAge = 1;
let nextPage = 0;
pageSize = 0;

document.getElementById("selectPageType").addEventListener("change", function(event) {
    pageSize = (event.target.value)
    showNumbersPerPage(numbers,pageSize,element)
    let maxPages = getMaxPAges(numbers, pageSize)
    console.log(maxPages)
})

document.getElementById("prev").addEventListener("click",() => {
    if (currwntPAge <1) {
        return;
    }
    showNumbersPerPage(numbers,pageSize,element)
    console.log("prev")
})

document.getElementById("next").addEventListener("click", () => {
    console.log("next")
})

function showNumbersPerPage(numbers,pageSize,element) {
    let numbersToBeShown = numbers.slice(0,pageSize);
    element.innerHTML= '';
    for (let nnum of numbersToBeShown) {
        element.innerHTML += `${nnum}<div>`;
    }
}

function getMaxPAges (numbers,pageSize) {
    return Math.ceil(numbers.length/pageSize)
}

let initalPageSize = document.getElementById("selectPageType").value;
let maxPages = getMaxPAges(numbers, initalPageSize)
showNumbersPerPage(numbers,initalPageSize,element);
console.log(maxPages)