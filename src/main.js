import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import MovieLists from "./components/MovieLists.vue";
import MovieDetails from "./components/MovieDetails.vue";
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    { path: '/', component: MovieLists },
    { path: '/movie-details', component: MovieDetails },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

createApp(App).use(router).mount('#app')
