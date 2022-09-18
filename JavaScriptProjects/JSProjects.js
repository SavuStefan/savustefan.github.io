const counter = document.querySelector(".counter");

let count = 1;

setInterval(()=> {
    if (count < 8) {
        count++;
        counter.innerText = count;
    }
}, 200);
