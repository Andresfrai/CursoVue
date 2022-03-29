<template>
    <div>
        <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>Minimo 3 caracteres.</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="animales"></b-form-select>
                    <p>Seleccion: {{selected}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Radio: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalesCheck"></b-form-checkbox-group>
                    <p>Check: {{check}}</p>
                </b-col>

            </b-row>
        </form>
        <p>Texto: {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto: '',
            selected: null,
            radio: null,
            check: [],
            animales: [
            { value: null, text: 'Seleccione una opcion.' },
            { value: 'Perro', text: 'Guau guau.' },
            { value: 'Gato', text: 'Miau miau.' },
            { value: 'Pato', text: 'Cuack cuack'}
            ],
            animalesRadio: [
            { value: 'Perro', text: 'Guau guau.' },
            { value: 'Gato', text: 'Miau miau.' },
            { value: 'Pato', text: 'Cuack cuack'}
            ],
            animalesCheck: [
            { value: 'Perro', text: 'Guau guau.' },
            { value: 'Gato', text: 'Miau miau.' },
            { value: 'Pato', text: 'Cuack cuack'}
            ]
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>