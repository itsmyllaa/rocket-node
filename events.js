//const { EventEmitter } = require('stream')

//const ev = new EventEmitter()
//ev.once se ouve uma única vez o primeiro evento
//ev.on('saySomething', (message) => {
//    console.log('Eu ouvi você', message)
//})

//ev.emit('saySomething', 'Camy')
//ev.emit('saySomething', 'Mayk')
//ev.emit('saySomething', 'Guilherme')

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora? quem poderá me defender?')
chapolin.emit('help')