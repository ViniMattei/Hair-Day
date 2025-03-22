import { scheduleDay, schedulesDay } from "../schedules/load"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDay()
