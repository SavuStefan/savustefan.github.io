const button = document.getElementById('dot-3')
const toast = document.getElementById('toasts')

const message = [
    'Greetings, humans!',
    'I know kung fu',
    'Now I am become Death, the destroyer of worlds',
    'This is my BOOM stick!',
    'Why so serious?',
]

button.addEventListener('click', ()=> createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() =>{
        notif.remove()
    }, 5000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}