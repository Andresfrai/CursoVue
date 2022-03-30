import Vue from 'vue'
import Vuex from 'vuex'

// PARA LLAMAR A LOS MODULOS CREADOS EN LA CARPETA MODULES, PRIMERO HAY QUE IMPORTARLOS
import tareas from '../modules/tareas'
// Mismo ejemplo pero con el modulo/archivo contador 
import contador from '../modules/contador'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titulo: 'Desde el index.js del store.'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // aQUI LLAMAMOS A LOS DIFERENTES MODULOS QUE HEMOS CREADO EN LA CARPETA MODULES QUE ESTA DENTRO DE rsc
    tareas,
    // lo mismo pero con el modulo/archivo contacor 
    contador
  }
})
