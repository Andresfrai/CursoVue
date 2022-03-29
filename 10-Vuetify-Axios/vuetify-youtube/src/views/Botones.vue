<template>
    <v-container >
        <v-layout>
            <v-flex>
                <v-btn>Texto</v-btn>

                <v-btn color="primary">Texto</v-btn>
                <v-btn dark color="blue">Texto</v-btn>

                <v-btn color="secondary" >Sin fondo</v-btn>

                <v-btn color="warning" large>Texto</v-btn>

                <v-btn color="primary" small>Texto</v-btn>

                <v-btn color="warning" large disabled>Texto</v-btn>
                <v-btn color="warning" large :disabled="true">Texto</v-btn>

                <v-btn color="info" depressed>Texto</v-btn>

                <v-btn color="info" icon >
                    <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn color="info" fab>
                    <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn color="info" fab small>
                    <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn color="info" fab large>
                    <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn >
                    Texto
                    <v-icon class="ml-2">forum</v-icon>
                </v-btn>

                <v-btn >
                    Texto
                    <v-icon right>forum</v-icon>
                </v-btn>

                <v-btn >
                    <v-icon left>forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="primary" >
                    <v-icon >forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="primary" block>
                    <v-icon >forum</v-icon>
                    Texto
                </v-btn>




            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>

export default {
    data(){
        return{

        }
    }
}
</script>
