const counter = document.querySelector(".counter");

let count = 1;

setInterval(()=> {
    if (count < 5) {
        count++;
        counter.innerText = count;
    }
}, 300);
