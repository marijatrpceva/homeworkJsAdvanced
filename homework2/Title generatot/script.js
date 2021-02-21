//## Title Generator

document.getElementById("btn").addEventListener("click", function() {
    let color = document.getElementById("color");
    let size = document.getElementById("fontSize");
    let text = document.getElementById("text");
    let header =document.getElementById("h1");

    header.innerHTML = `<h1>${text.value}<h1>`;
    header.style.color=`${color.value}`;
    header.style.fontSize=`${size.value}px`
})