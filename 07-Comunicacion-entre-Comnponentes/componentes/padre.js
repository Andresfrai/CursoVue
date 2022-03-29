Vue.component('padre', {
    template: // html
    `
        <!--  **** DE FORMA ESTATICA ****
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre</h2>
            
            Eso de numero es un dato o datos que pasamos desde el componenete padre al componenete hijo
            y por lo tanto en el hijo tenemos que añadir la propiedad PROPS.
           
            <hijo numero="5"></hijo>
        </div>
        -->


        <!--**** DE FORMA DINAMICA ****-->
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            {{nombrePadre}}
            <!-- con esto @nombreHijo="nombrePadre = $event" indicamos que el dato que pasamos del hijo al padre, 
            en este caso nombre, se asignara al nuevo objeto nombrePadre Y se mostrara en el componenete padre aqui {{nombrePadre}} -->
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})