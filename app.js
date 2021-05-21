Array.range = (from, to, step) =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);


function getNumber() {
    const userInput = document.getElementById("num")
    console.log(range)
}
let n = num.value
let range = Array.range(1, n, 1);

const yu = "yu"
const gi = "gi"
const oh = "oh"

function checkYuGiOh() {
    
}
