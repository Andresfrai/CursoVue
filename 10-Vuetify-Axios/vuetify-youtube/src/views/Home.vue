<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat explicabo deleniti natus, optio est quod accusantium a in velit quo, 
            aperiam ipsum iusto aliquam molestiae expedita dolore eveniet inventore laboriosam.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat explicabo deleniti natus, optio est quod accusantium a in velit quo, 
            aperiam ipsum iusto aliquam molestiae expedita dolore eveniet inventore laboriosam.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" @click="dialog = true">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- DIALOG -->
    <v-dialog v-model="dialog" width="500px" persistent>
      <v-card>
        <v-card-title>Este es el Titulo</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Incidunt necessitatibus ratione mollitia provident pariatur, 
          maxime voluptate asperiores quibusdam odio veniam beatae illo fuga 
          quam quas eligendi sequi saepe porro officia!</v-card-text>
          <v-divider></v-divider>
          <v-actions>
            <v-btn @click="dialog = false">Cerrar</v-btn>
          </v-actions>
      </v-card>
    </v-dialog>

    <!-- FIN DIALOG -->

  </v-container>
</template>

<script>

  export default {
    data(){
      return{
        dialog: false
      }
    }
  }
</script>
