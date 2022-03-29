<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex md6>
                <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
                    <v-card-text>
                        <v-chip label color="pink" text-color="white" class="ml-0">
                            <v-icon left>label</v-icon>{{item.titulo}}
                        </v-chip>
                        <p>{{item.descripcion}}</p>
                        <v-btn color="warning" class="ml-0" @click="editar(index)">Editar</v-btn>
                        <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
                    </v-card-text>
                </v-card>

                <!--<v-card class="mb-3">
                    <v-card-text>
                        <v-chip label color="pink" text-color="white" class="ml-0">
                            <v-icon left>label</v-icon>Titulo de tarea 2
                        </v-chip>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit enim, temporibus 
                            tempora ipsum maxime dolorem! Fugit consequuntur quaerat sit! Eaque suscipit quisquam voluptates 
                            voluptatibus id et laudantium nisi nostrum.</p>
                        <v-btn color="warning" class="ml-0">Editar</v-btn>
                        <v-btn color="error">Eliminar</v-btn>
                    </v-card-text>
                </v-card>-->
            </v-flex>
            <v-flex md6 v-if="formAgregar">
                <v-card class="mb-3 pa-3">
                    <v-form @submit.prevent="agregarTarea()">
                        <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripcion de la Tarea" v-model="descripcion"></v-textarea>
                        <v-btn color="success" block type="submit">Agregar Tarea</v-btn>
                    </v-form>
                </v-card>
            </v-flex>

            <v-flex md6 v-if="!formAgregar">
                <v-card class="mb-3 pa-3">
                    <v-form @submit.prevent="editarTarea()">
                        <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripcion de la Tarea" v-model="descripcion"></v-textarea>
                        <v-btn color="warning" block type="submit">Editar Tarea</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>


        <v-snackbar v-model="snackbar">
            {{ mensaje }}
            <v-btn color="pink" @click="snackbar = false">
                Cerrar
            </v-btn>
        </v-snackbar>
    </v-container>
</template>


<script>
export default {
    data(){
        return{
            listaTareas:[
                {id: 1, titulo: 'TituloTarea 1', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit enim, temporibus tempora ipsum maxime dolorem! Fugit consequuntur quaerat sit! Eaque suscipit quisquam voluptates .'},
                {id: 2, titulo: 'TituloTarea 2', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit enim, temporibus tempora ipsum maxime dolorem! Fugit consequuntur quaerat sit! Eaque suscipit quisquam voluptates .'}
            ],
            titulo: '',
            descripcion:'',
            snackbar: false,
            mensaje: '',
            formAgregar: true,
            indexTarea: ''

        }
    },
    methods:{
        agregarTarea(){
            if (this.titulo === '' || this.descripcion === '') {
                this.snackbar = true
                this.mensaje = 'Llena todos los cmapos'
            }else{
                this.listaTareas.push({
                    id: Date.now(),
                    titulo: this.titulo,
                    descripcion: this.descripcion
                })
                this.titulo = '',
                this.descripcion = ''
                this.mensaje = 'Tarea agregada'
            }
        },
        eliminarTarea(id){
            this.listaTareas = this.listaTareas.filter(e => e.id != id)
        },
        editar(id){
            this.formAgregar = false
            this.titulo = this.listaTareas[id].titulo
            this.descripcion = this.listaTareas[id].descripcion
            this.indexTarea = id
        },
        editarTarea(){
            this.listaTareas[this.indexTarea].titulo = this.titulo
            this.listaTareas[this.indexTarea].descripcion = this.descripcion
            this.formAgregar = true
            this.titulo = '',
            this.descripcion = ''
        }
    }
}
</script>