<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from "vuex";

const store = useStore();
const comics =  computed(() => store.state.comics);
onMounted(async () => {
    await store.dispatch('fetchComics');
})
</script>

<template>
    <div class="comics-list">
        <h1>All Comics</h1>
        <ul v-if="comics">
             <li v-for="comic in comics" :key="comic.id">
                <RouterLink :to="`/${comic.id}/movie-details`">
                    <img :src="`${comic.images[0].path}.jpg`" alt="movie-img">
                    <div>
                        <h2 class="title">{{ comic.title }}</h2>
                        <p>{{ comic.modified.slice(0,4) }}</p>
                    </div>
                </RouterLink>
            </li> 
        </ul>
        <p v-else>Loading...</p>

    </div>
</template>

<style  lang="scss" scoped>
.comics-list {
    margin-top: 20px;

    h1 {
        padding-left: 20px;
        margin-bottom: 20px;
        font-size: 2rem;
    }
  
    }

    ul {
        list-style: none;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: centers;
        flex-wrap: wrap;
        gap: 4rem;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: start;
        cursor: pointer;
        transition: ease-in-out;

        img {
            height: 25rem;
            border-radius: 5px;
        }
        .title{
            font-size: medium;
            word-break: break-all;
            width: 27vw;
        }
        a{
            text-decoration: none !important;
            color: black;
        }
    }

    li:hover {
        transform: translateY(-0.5rem);
        transition-delay: 0.2s;
        transition-duration: 0.4s;
    }

</style>

