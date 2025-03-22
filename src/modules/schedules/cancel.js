import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")
// Gera evento de click para cada lista
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-Icon")) {
      // Obtem a li pai do elemento clicado.
      const item = event.target.closest("li")

      //Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirmma que o Id foi selecionado
      if (id) {
        // Confirma se o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        )
        if (isConfirm) {
          // Faz a requisicao na API para cancelar
          await scheduleCancel({ id })
          //Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})
