const Tarea = require('./tarea')
class Tareas{
    _listado = {}

    constructor() {
        this._listado = {}
    }
    crearTarea(desc=''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    
        get getListadorArr(){
            const listado = []
            Object.keys(this._listado).forEach((key) => {
                const tarea = this._listado[key]
                listado.push(tarea)
            })
            return listado
        }
    
    cargarTareasFromArr(tareas=[]){
        tareas.map((tarea)=>{
            this._listado[tarea.id] = tarea
        })
    }
}
module.exports = Tareas