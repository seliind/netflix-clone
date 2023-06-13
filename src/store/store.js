import Vuex from 'vuex';
import axios from 'axios';

const store = new Vuex.Store({
  state: {
    data: "",
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          commit('setData', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  getters: {
    getUsers(state) {
      return state.data;
    },
  },
});

export default store;
