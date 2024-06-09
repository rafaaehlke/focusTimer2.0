import state from './state.js'
import * as el from './elements.js'
import { finishAudio } from './sounds.js'

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

    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--
    
    if( seconds < 0 )  {
      seconds = 59
      minutes--
      }

    if( minutes < 0 ) {
      finishAudio.play()
      return
    }


    updateDisplay(minutes, seconds)


    setTimeout(() => countDown(), 1000)

    
}
