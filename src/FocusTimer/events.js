//importado as funcoes do controles, stop e sounds do elements
import * as el from "./elements.js";
//importado tudo e renoameado com actions, de actions.js
import * as actions from "./actions.js"
import state from "./state.js";
import { updateDisplay } from "./timer.js";

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

//Editando os minutos
export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

   state.minutes = time
   state.seconds = 0
    
   updateDisplay()
   el.minutes.removeAttribute('contenteditable')
  })
}

