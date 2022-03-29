<template>
  <v-app>
    <v-toolbar class="warning" >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>VUETIFY</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="success">ingreso</v-btn>
      <v-btn class="error">salir</v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p>Juanito Perez</p>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn color="success" block :to="{name: 'Home'}">Home</v-btn>
          <v-btn color="success" block :to="{name: 'Tareas-CRUD'}">Lista de Tareas</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true
  }),
};
</script>
