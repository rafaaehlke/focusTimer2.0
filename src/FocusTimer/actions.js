
import state from './state.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function set() {
  console.log('Set teste')
}


//Sounds add classList
export function florestOn() {
  state.isMute = document.documentElement.classList.toggle('florestOn')
}

export function rainOn() {
  state.isMute = document.documentElement.classList.toggle('rainOn')
}

export function keyboardOn() {
  state.isMute = document.documentElement.classList.toggle('keyboardOn')
}

export function fireOn() {
  state.isMute = document.documentElement.classList.toggle('fireOn')
}