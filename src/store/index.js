import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'VueX desde Ceros',
    nombre: 'Ronaldo',
    apellido: 'Monserrate',
    amigos: [],
  },
  mutations: {
    addAmigo(state, amigo) {
      state.amigos = [amigo, ...state.amigos];
    },
    removeAmigo(state, index){
      state.amigos.splice(index, 1);
    }
  },
  actions: {
    addAmigoAction(context, amigo) {
      context.commit('addAmigo', amigo);
    },
    removeAmigoAction(context, index){
      context.commit('removeAmigo', index);
    }
  },
  modules: {
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
    nombreCompleto(state) {
      return `${state.nombre} ${state.apellido}`;
    }
  },
})
