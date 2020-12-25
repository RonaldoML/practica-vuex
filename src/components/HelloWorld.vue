<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h1>{{ $store.getters.nombreCompleto }}</h1>

    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar amigo</button>

    <h2> Amigos </h2>
    <ul>
      <li v-for="(amigo, key) in $store.state.amigos" :key="key">
        {{ amigo }}
      </li>
    </ul>

    <input type="text" v-model="amigoToRemove">
    <button @click="remAmigo">Quitar amigo</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      amigo:'',
      amigoToRemove:'',
    }
  },
  methods: {
    addAmigo(){
      this.$store.dispatch('addAmigoAction', this.amigo);
      this.amigo = '';
    },
    remAmigo(){
      const a = this.$store.state.amigos.indexOf(this.amigoToRemove);
      if(a != -1){
        this.$store.dispatch('removeAmigoAction', a);
      }else{
        this.$toasted.success('hello billo',{action : {
        text : 'x',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },})
      }
      this.amigoToRemove = '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
