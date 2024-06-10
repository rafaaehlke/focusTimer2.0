//Importa modulo estado
import state from "./state.js"
//Importa modulo eventos
import * as events from "./events.js"
//importa a fumncao de timer
import * as timer from "./timer.js"

//funcao criada para quando startar
export function start (minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds
  
  timer.updateDisplay()
  
  events.registerControls()
  events.setMinutes()
  events.soundControls()
}