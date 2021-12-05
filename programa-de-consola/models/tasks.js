const Task = require("./task");

class Tasks {
  _listado = {};

  get listadoArr() {
    const listado = [];
    //js tiene un metodo en su objecto Object punto keys en el cual puedo extraer cada una de las llaves
    //que se encuentrar en cada uno de los objectos, en este caso el this._listado
    // esto me va a regresar un un arreglo de todas las llaves

    // tambien tenemos metodos como el forEach, para indentificar cuales son las tareas que tengo en este _listado[]

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }



  // Esta funcion es para cargar la info que se guarda en el archivo .json 
  // cuando se le pasa la data desde el app.js y utilizamos el forEach para barrer e identificar todos los objetos
  // que se encuantrar en ._listado con el id
  updateTasksFromArray(tareas = []){

    tareas.forEach((task) =>  {
      this._listado[task.id] = task;
    });

  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._listado[task.id] = task;
  }
}

module.exports = Tasks;
