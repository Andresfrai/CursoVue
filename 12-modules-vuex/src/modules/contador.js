export default{
    namespaced: true,
    state:{
        contadorState: 0
    },
    mutations:{
        aumentarContador(state, payload){
            state.contadorState = state.contadorState+payload
        }
    },
    actions:{

    },
    getters:{

    }

}