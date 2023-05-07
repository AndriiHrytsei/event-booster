import * as modalsJS from 'modals.js'

modalsJS.span.addEventListener("click", () => {
    modalsJS.modal.style.display = "none";
  })
  
  modalsJS.cardEvents.forEach((cardEvent) => {
    cardEvent.addEventListener('click', () => {
      modal.style.display = "block";
    });
  });
  
  window.onclick = function(event) {
    if (event.target == modalsJS.modal) {
        modalsJS.modal.style.display = "none";
    }
  }