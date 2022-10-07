const colors = require('colors')
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas =require('./models/tareas')
const {guardarDB, leerDb} = require('./helpers/guardarLeerArchivo')

const main = async () =>{
    let opt = ''
const tareas = new Tareas()

const tareasDb = leerDb()
if(tareasDb){
    //establecer tareas
    tareas.cargarTareasFromArr(tareasDb)
}

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const desc= await leerInput('Descripcion:')
                tareas.crearTarea(desc)
                break
                case 2:
                    console.log(tareas.getListadorArr)
                    break
        }
        guardarDB(tareas.getListadorArr)

        if(opt !== '0') await pausa()
    } while (opt !== '0');
}

main()
