const listaDeTareas = document.querySelector("#tareas2");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const cuentaCantTareas = document.querySelector("#cuentaTareas");
const cantTareasRealizadas = document.querySelector("#cuentaRealizadas");
const tareas = [];
let idTarea;

//Nueva Tarea
btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value;
  idTarea = Math.floor(Math.random() * 1000);
  tareas.push({ id: idTarea, tarea: tarea, realizada: false });
  tareaInput.value = "";
  renderList(tareas);
});

//Renderizar Tareas

let cantidadTareasRealizadas;

function renderList(tareas) {
  let html = "";
  cantidadTareasRealizadas = 0;
  for (let tarea of tareas) {
    let estadoTarea;

    if (tarea.realizada && true) {
      estadoTarea = "checked";
      cantidadTareasRealizadas += 1;
    } else {
      estadoTarea = "";
    }

    html += `<tr>
                <td>${tarea.id}</td>
                <td>${tarea.tarea}<td>
                <td><input type="checkbox" id="chkEstado" 
                    onclick="actualizaEstadoTarea(${tarea.id})" ${estadoTarea}></td>
                <td><img src="icono_borrar.png" class="icono_borrar" onclick="borrar(${tarea.id})"></td>
              </tr>`;
    console.log(html);
  }
  listaDeTareas.innerHTML = html;
  cuentaCantTareas.textContent = `Total: ${tareas.length}`;
  cantTareasRealizadas.textContent = `Realizadas: ${cantidadTareasRealizadas}`;
}

//Borrar Tareas
function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderList(tareas);
}

//Actualiza Estado Tarea
function actualizaEstadoTarea(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas[index].realizada = !tareas[index].realizada;
  renderList(tareas);
}

// btnBuscar.addEventListener("click", () => {
//   const tareaBuscada = buscadorInput.value;
//   const tareasFiltradas = tareas.filter((tarea) =>
//     tarea.tarea.includes(tareaBuscada)
//   );
//   renderList(tareasFiltradas);
// });

//<input type="checkbox" id="horns" name="horns" />
