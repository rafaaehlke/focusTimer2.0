//Importa modulo estado
import state from "./state.js"
//Importa modulo eventos
import * as events from "./events.js"

//funcao criada para quando startar
export function start (minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  events.registerControls()
  events.soundControls()
}