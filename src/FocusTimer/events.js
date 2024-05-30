//importado as funcoes do controles, stop e sounds do elements
import { controls, stop, sounds } from "./elements.js";
//importado tudo e renoameado com actions, de actions.js
import * as actions from "./actions.js"

//funçao criada para registro de eventos click no data action, e caso ele detecte que aonde clicado não é uma funcao, 
//retornará e não executara nada
function eventos () {
  const action = event.target.dataset.action
  if(typeof actions[action] != 'function') {
    return
  }

  actions[action]()
}

  
// registrando eventos de clicks dos botões (Play, +, - )
export function registerControls () {
  controls.addEventListener('click', (event) => {
  
    eventos()
  
  })
}

// registrando eventos de clicks do botao Stop
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

