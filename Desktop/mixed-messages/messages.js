const messages = [
    'Be yourself; everyone else is already taken.',
    'Be the change that you wish to see in the world.',
    'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    'We are all in the gutter, but some of us are looking at the stars.',
    'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    'It is never too late to be what you might have been.',
    'There is no greater agony than bearing an untold story inside you.'
]
const randomIndex = Math.floor(Math.random() * messages.length)
console.log(messages[randomIndex])