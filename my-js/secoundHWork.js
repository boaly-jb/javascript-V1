let onBtn = document.querySelector(".onBtn")
let bulb = document.querySelector(".bulbon")

function test() {
    bulb.src ="./img/light-on.jpg";
}
onBtn.addEventListener('click', test); // Bulb On

let offBtn = document.querySelector(".offbtn")
function ofbulb() {
    // bulb.src ="./img/light-of.jpg";
    bulb.src ="https://th.bing.com/th/id/OIP.PxNflZ-FdksQ3qWCPiCO_gAAAA?rs=1&pid=ImgDetMain";
}
offBtn.addEventListener('click', ofbulb) // Bulb Off


