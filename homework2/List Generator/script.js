//List Generator

document.getElementById("btn").addEventListener("click", function() {
    let color = document.getElementById("color");
    let size = document.getElementById("fontSize");
    let text = document.getElementById("text");
    let list =document.getElementById("list");
    let arr = [];
    arr.push(text.value);
    arr= arr[0].split(",")
    console.log(arr);
    for (let i of arr) {
        list.innerHTML +=
        `<ul>
        <li>${i}</li>
        </ul>`;
        list.style.color=`${color.value}`;
        list.style.fontSize=`${size.value}px`
    }
 
})