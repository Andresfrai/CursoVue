<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- Dentro del router-linkl ponemos un objeto :to y dentro del :to la quiery, que tambien es un obbjeto,
     dentro de la quiery le ponemso el nombre (en este caso seccion) y le asignamos un valor seccion: 1-->
    <router-link :to="{query:{seccion: 1}}">1</router-link><br>
    <router-link :to="{query:{seccion: 2}}">2</router-link><br>
    <router-link :to="{query:{seccion: 3}}">3</router-link><br>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  // Con esto del watch observamos la query. Y con el immediate se observa cada vex que se ejecuta la pagina 
  watch: {
    "$route.query.seccion":{
      immediate: true,
      handler(seccion){ 
      // el handler, lo que hace es coger un valor nuevo y avandona el viejo, es deci, 
      //que si estamos en la seccion 2 y pasamos a la 3 coge el valor de la query 3 y abandona el de la query 2
        console.log(`Seccion a cambiado: ${seccion}`);
      }
    }
  },
}
</script>

