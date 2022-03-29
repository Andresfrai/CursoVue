const app = new Vue({
    el: '#app',// cogemos el id del div del html
    data: {// Los adatas se trabajan atraves del data
        titulo: 'Hola Mundo con VUE',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 5},
            {nombre: 'Platano', cantidad: 0}
        ],
        nuevaFruta: '',
        total: 0,
    },
    methods:{// Podemos meter los metodos que queramos dentro de un objeto como aqui.
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
           })
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for (const fruta of this.frutas) {
                this.total = this.total + fruta.cantidad
            }
            return this.total
        }
    }
});