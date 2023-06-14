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
    favorites: [],
  },
  mutations: {
    setComics(state, data) {
      state.comics = data;
    },
    setCharacters(state, data) {
      state.characters = data;
    },
    add_title(state, title) {
      state.favorites.push(title)
    },
    remove_title(state, title) {
      state.favorites = state.favorites.filter(element => element !== title)
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
    add_title ({commit}, {title}) {
     commit('add_title', title)
    },
    remove_title({commit}, {title}) {
      commit('remove_title', title)
    },
  },
});

export default store;
