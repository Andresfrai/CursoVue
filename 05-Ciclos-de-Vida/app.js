const app = new Vue({
    el:'#app',
    data:{
        saludo:'Soy ciclo de vida de Vue.'
    },
    beforeCreate(){
        console.log('BeforeCreate');
    },
    // Al crear los metodos observadores y eventos, pero aun no accede al DOM.
    // Aun no se puede acceder a 'el'.
    created(){
        console.log('Create');
    },
    // Se ejecuta antes de insertar los datos en el DOM.
    beforeMount(){
        console.log('BeforeMount');
    },
    // Se ejecuta al insertar en el DOM.
    mounted(){
        console.log('Mounted');
    },
    // Se ejecuta al detectar los cambios.
    beforeUpdate(){
        console.log('BeforeUpdate');
    },
    // Se ejecuta al realizar los cambios.
    updated(){
        console.log('Updated');
    },
    // Se ejecuta antes de destruir la iunstancia.
    beforeDestroy(){
        console.log('BeforeDestroy');
    },
    // Se ejecuta cuando se destruye toda la instancia.
    destroyed(){
        console.log('Destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
});