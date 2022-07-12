/*red button*/

let Audio = document.getElementById("notification")
function PlaySound (){
    Audio.play()
    alert()
}

/*green button*/
const button = document.getElementById('dot-3')
const toast = document.getElementById('toasts')

const message = [
    '“FINISH HIM!”',
    '“War... war never changes.”',
    '”Nothing is true, everything is permitted.”',
    '“This is my BOOM stick!”',
    '“Praise the sun!“',
]

button.addEventListener('click', ()=> createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() => {

        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}

/*Konami code*/
const pressed = []
const secretcode = "ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a"

window.addEventListener("keyup", (e)=>{
    pressed.push(e.key)
    console.log(e.key)
    pressed.slice(-secretcode.length - 1, pressed.length - secretcode.length)
    if (pressed.join("").includes(secretcode)){
    alert()
    }
})