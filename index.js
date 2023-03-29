





let one = document.querySelector("button.one");
let two = document.querySelector("button.two");
let three = document.querySelector("button.three");
let flex = document.querySelectorAll("div");


one.onclick = () => {
    for(let i = 0; i <= flex.length -1; i++){
        flex[i].style.display = "flex";
    }
}
two.onclick = () => {
    for(let i = 0; i <= flex.length -1; i++){
        flex[i].style.display = "flex";justify = "center";
    }
}
three.onclick = () => {
    for(let i = 0; i <= flex.length -1; i++){
        flex[i].style.display = "flex"; justify = "center";align = "center";
    }
}















