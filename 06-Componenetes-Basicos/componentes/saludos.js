       // Creamos un componenete que se llama saludo y contiene una plantilla con un h1
        // Estos componenetes siempre vanm a tener un template
        Vue.component('saludo',{
            template:`
                <div>
                    <h1>{{saludo}}</h1>
                    <h3>Asi se crea un plantilla con Vue.</h3>
                </div>
                `,
            // Data aqui es un funcion no como antes en los archivos js que era un objeto.
            // Y como funcion devuelve un objeto, es ete caso saludo.
            data(){
                return{
                    saludo: 'Hola desde Vue.'
                }
            }
        });