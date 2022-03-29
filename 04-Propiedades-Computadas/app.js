const app = new Vue({
    el: '#app',
    data:{
        mensaje: 'Hola soy Andres.',
        contador:0
    },
    computed:{
        invertido(){
            /* Split('') Separa un cadena de caracteres por el caracter que le indicemos entre parentesis,
            sin le ponemos '' separara cada letra por separada y las guarda en un arry.
            
            Reverse() coge el array del Split y los da la vuelta completamente.

            Join() vuelve a uni lis caracteres de separamos en el split, y que ahora estan al reves por el reverse().
            */
            return this.mensaje.split('').reverse().join(''); 
        },
        color(){
            return{
                'bg_cuccess' : this.contador<=10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        } 
        
    }
});