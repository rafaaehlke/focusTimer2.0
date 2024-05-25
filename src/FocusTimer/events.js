import { controls } from "./elements.js";
import { sounds } from "./elements.js";


function eventos () {
  const action = event.target.dataset.action
  if(action === undefined) {
    return
  }

  console.log(action)
}

export function registerControls () {
  controls.addEventListener('click', (event) => {
  
    eventos()
  
  })
}

export function soundControls () {
  sounds.addEventListener('click', (event) => {
    eventos()
  })
}

