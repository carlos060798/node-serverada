const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
  const indicator = readlineSync.question('Indicador de la tarea: ');
  const description = readlineSync.question('Descripción de la tarea: ');
  tasks.push({ indicator, description, completed: false });
  console.log('Tarea añadida correctamente.');
}

function deleteTask() {
  const index = readlineSync.questionInt('Ingrese el índice de la tarea que desea eliminar: ');
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada correctamente.');
  } else {
    console.log('Índice inválido. No se eliminó ninguna tarea.');
  }
}

function completeTask() {
  const index = readlineSync.questionInt('Ingrese el índice de la tarea que desea marcar como completada: ');
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada correctamente.');
  } else {
    console.log('Índice inválido. No se marcó ninguna tarea como completada.');
  }
}

function printTasks() {
  console.log('--- Lista de Tareas ---');
  tasks.forEach((task, index) => {
    console.log(`[${index}] [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
  console.log('----------------------');
}

function main() {
  while (true) {
    console.log('\n¿Qué acción desea realizar?');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const option = readlineSync.questionInt('Ingrese el número de la opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        deleteTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        printTasks();
        break;
      case 5:
        console.log('Saliendo del programa.');
        return;
      default:
        console.log('Opción inválida. Por favor, seleccione una opción válida.');
    }
  }
}

main();