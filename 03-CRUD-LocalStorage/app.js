const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con VUE.js',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = '';
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index) {
            this.tareas[index].estado = true
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas));
        },
        eliminar:function(index) {
            this.tareas.splice(index, 1)
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas));
        }
    },
    created: function() {
        let datosdb = JSON.parse(localStorage.getItem('gim-vue'));
        if (datosdb === null) {
            this.tareas = [];
        }else{
            this.tareas = datosdb;
        }
    }
});