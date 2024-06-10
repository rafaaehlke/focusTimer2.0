import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'
import * as el from  './elements.js'

//inicia o contador
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPress.play()
  timer.countDown()

}

//pausa o contador
export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPress.play()
  
  }
  
//reseta o tempo
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  sounds.buttonPress.play()

}

export function setTimer() {
  state.isRunning = false
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
  sounds.buttonPress.play()
}

export function set() {
  console.log('Set teste')
  sounds.buttonPress.play()
}


//Sounds add classList
export function florestOn() {
  state.florestOn = document.documentElement.classList.toggle('florestOn')
  if(state.florestOn) {
    sounds.forestAudio.play()
    return
  }

  sounds.forestAudio.pause()
}

export function rainOn() {
  state.rainOn = document.documentElement.classList.toggle('rainOn')
  if(state.rainOn) {
    sounds.rainAudio.play()
    return
  }

  sounds.rainAudio.pause()
}

export function keyboardOn() {
  state.keyboardOn = document.documentElement.classList.toggle('keyboardOn')
  if(state.keyboardOn) {
    sounds.keyboarAudio.play()
    return
  }

  sounds.keyboarAudio.pause()
}

export function fireOn() {
  state.fireOn = document.documentElement.classList.toggle('fireOn')
  if(state.fireOn) {
    sounds.fireAudio.play()
    return
  }

  sounds.fireAudio.pause()
}