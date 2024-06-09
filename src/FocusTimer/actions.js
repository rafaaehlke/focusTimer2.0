import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPress.play()
  timer.countDown()

}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  sounds.buttonPress.play()

}

export function set() {
  console.log('Set teste')
  sounds.buttonPress.play()
}


//Sounds add classList
export function florestOn() {
  state.isMute = document.documentElement.classList.toggle('florestOn')
  sounds.forestAudio.play()
}

export function rainOn() {
  state.isMute = document.documentElement.classList.toggle('rainOn')
  sounds.rainAudio.play()
}

export function keyboardOn() {
  state.isMute = document.documentElement.classList.toggle('keyboardOn')
  sounds.keyboarAudio.play()
}

export function fireOn() {
  state.isMute = document.documentElement.classList.toggle('fireOn')
  sounds.fireAudio.play()
}