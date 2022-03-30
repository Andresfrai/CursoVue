
// hEMOS CREADO UN ARCHIVO LLAMADO TAREAS, ESTE ARCHIVO ES UN MODULO Y SIRVEN PARA QUE LA TIENDA O STORE 
//NO COLAPSE AL TENER MILES DE STATES O MUTATIONS O GETTERS ... 
// UNA VEZ CREADO EN MODULO COMO ES ESTE CASO, TENEMOS QUE IR AL ARCHIVO STORE PARA LLAMAR A ESTE MODULO,
// LO LLAMAREMOS EN EL APARTADO MODULES DEL ARCHIVO STORE.

export default{
    namespaced: true,
    state:{
        tareasState: ['tarea 1', 'tarea 2', 'tarea 3']
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    }
}