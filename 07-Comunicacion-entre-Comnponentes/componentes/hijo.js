Vue.component('hijo',{
    template:`
    <!-- **** FORMA ESTATICA ****
        <div class="py-5 bg-success">
            <h4>Componente hijo</h4>
            <h5>{{numero}}</h5>
        </div> 
        -->


        <!-- **** FORMA DINAMICA **** -->
        <div class="py-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>
            <h4>Nombre: {{nombre}}</h4>
            <button class="btn btn-danger" @click="numero++">+</button>
        </div>
    `,
    // FORMA ESTATICA ARRIBA --> 
    //PROPS es un array que tiene un nombre, en este caso numero. 
    // Y que por tanto recoge los datos de otro componenete que tenga este mismo nombre en alguna parte, 
    //en este caso el componenete padre, y una vez hecho esto, lo podemos mostrar en el hijo en este caso en el h5.
    
    // FORMA DINAMICA DEBAJO DE LA ESTATICA -->
    // la gracia de la forma dinamicaes que el numero si se cambia en el complemento padre, tambien se cambiara en el 
    //complemento hijo inmediantamente.
    
    props:['numero'],
    data(){
        return{
            nombre:'Andriu'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);

    }
})