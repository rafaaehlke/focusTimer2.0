import state from './state.js'
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes  //Nullish coalesing operator
  seconds =  seconds ?? state.seconds  //se o operador da esquerde for NULL ou Inexistente, troca pelo da direita


  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countDown() {
  if(!state.isRunning) {
    return
    }
    console.log('iniciou')
    setTimeout(() => countDown(), 1000)
    
}
