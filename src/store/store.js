import Vuex from "vuex";
import axios from "axios";

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: "a877cea7ec05a22e0e55707d1438c65c",
  };
  return config;
});

const store = new Vuex.Store({
  state: {
    comics: null,
    characters: null,
    favorites: 0,
    isAdded : false,
  },
  mutations: {
    setComics(state, data) {
      state.comics = data;
    },
    setCharacters(state, data) {
      state.characters = data;
    },
    incrementFavorites(state) {
      state.isAdded = !state.isAdded;
      state.favorites++;
    },
    decrementFavorites(state) {
      state.isAdded = !state.isAdded;
      if(state.favorites >0) {
        state.favorites--;
      }
    }
  },
  actions: {
    fetchComics({ commit }) {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&dateDescriptor=thisMonth"
        )
        .then((response) => {
          commit("setComics", response.data.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchCharacters({ commit }) {
      axios
        .get("https://gateway.marvel.com/v1/public/characters")
        .then((response) => {
          commit("setCharacters", response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    incrementFavorites({commit}) {
      commit('incrementFavorites');
    },
    decrementFavorites({commit}) {
      commit('decrementFavorites');
    }
  },
});

export default store;
