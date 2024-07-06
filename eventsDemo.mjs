import {EventEmitter} from 'events'
// this modules use for real time applications 

const myEmitter  = new EventEmitter()

function greetHandler(name){
   console.log('hi'+' ' +name);
}
function byeHandler(name){
   console.log('bye'+ ' ' +name);
}

myEmitter.on('greet' , greetHandler)
myEmitter.on('bye' , byeHandler)

myEmitter.emit('greet' , 'hana')
myEmitter.emit('bye' , 'kimia')

myEmitter.on('error' , (err)=>{
   console.log('every things burn !!!' , err)
})

myEmitter.emit('error', new Error('EVERY THINGS BURNS'))