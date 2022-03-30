<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tareasState" :key="index">{{item}}</h2>
    <h3>{{contadorState}}</h3>
    <button @click="aumentarContador(1)">+</button>
    <h3>{{titulo}}</h3>
  </div>
</template>

<script>
// En la importacion llamamos a mapState por que todo los hacemos desde el apartado STATE en los modulos, 
//pero el en el ejemoplo del contador, tenemos una mutacion, por loq ue tenemos que llamar tambien a mapMutations
import { mapState, mapMutations } from 'vuex'

export default{
  computed:{
    // En este primer mapState indicamos que es del modulo de tareas en el primer parametro 
    //(este 1er parametro tiene que ser el mismo nombre que hemos puesto en el apartado modules del index.js del store)
    ...mapState('tareas',['tareasState']),
    // Este segundo mapState es global, por que lo llamamos directamente desde el index.js del store
    ...mapState(['titulo']),
    // Este ejemplo es igual que el de tareas pero con el modulo/archivo contador
    ...mapState('contador', ['contadorState'])
  },
  // Las mutaciones MapMutations las metemos en los metodos 
  methods:{
    ...mapMutations('contador',['aumentarContador'])
  }

}
</script>

