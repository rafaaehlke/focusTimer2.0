import { controls } from "./elements.js";
import { stop } from "./elements.js"
import { sounds } from "./elements.js";
import * as actions from "./actions.js"


function eventos () {
  const action = event.target.dataset.action
  if(typeof actions[action] != 'function') {
    return
  }

  actions[action]()
}

  
// registrando eventos de clicks dos botões Play, +, - 
export function registerControls () {
  controls.addEventListener('click', (event) => {
  
    eventos()
  
  })
}

export function stopControl () {
  stop.addEventListener('click', (event) => {
    eventos()
 })
}

// registrando eventos de clicks do botao na area SONS
export function soundControls () {
  sounds.addEventListener('click', (event) => {
    eventos()
  })
}

