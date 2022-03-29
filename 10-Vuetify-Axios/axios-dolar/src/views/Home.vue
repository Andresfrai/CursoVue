<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card color="error" dark >
          <v-card>
            <v-date-picker v-model="fecha" full-width locale="es-es" :min="minimo" :max="maximo" @change="getDolar(fecha)">

            </v-date-picker>
          </v-card>
          <v-card-text class="display-1 text-sm-center">
            {{valor}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import axios from "axios"
import { mapMutations } from "vuex";

  export default {
    data(){
      return{
        fecha: new Date().toISOString().substr(0,10),
        minimo: '1984',
        maximo: new Date().toISOString().substr(0,10),
        valor: null
      }
    },
    methods:{
      ...mapMutations(['mostrarLoading', 'ocultarLoading']),

      async getDolar(dia){
        let arrayFecha = dia.split('-')
        let ddmmyyyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]

        try {
          this.mostrarLoading({titulo: 'Accediendo a informacion', color: 'secondary'})
          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyyyy}`)
          if (datos.data.serie.length > 0) {
            this.valor = datos.data.serie[0].valor
          }else{
            this.valor = 'Sin resultados disponiobles'
          }
          
        } catch (error) {
          //console.log(error);
        }
        finally{
          this.ocultarLoading()
        }
        
      }
    },
    created(){
      this.getDolar(this.fecha)
    }
  }
</script>
