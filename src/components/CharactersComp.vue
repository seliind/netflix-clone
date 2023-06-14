<script setup>
import {onMounted, computed} from "vue"
import { useStore } from "vuex";

const store = useStore();
const characters = computed(() => store.state.characters);

onMounted(async () => {
    await store.dispatch("fetchCharacters");
})
</script>

<template>
      <div class="characters">
        <h1>Check Out the Characters!</h1>
        <ul>
           <li v-for="character in characters" :key="character.id">
                <img :src="`${character.thumbnail.path}.jpg`">
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.characters {
    margin-top: 50px;
    margin-bottom: 110px;
    text-align: center;

    h1 {
        padding-left: 20px;
        font-size: 2rem;
        margin-bottom: 30px;
    }

    ul {
        list-style: none;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-size: small;

        li {
           cursor: pointer;

           img{
            width: 7rem;
            height: 6rem;
            object-fit: cover ;
           }
           img:hover{
            scroll-behavior: smooth;
            scale: 1.15;
           }
        }
    }

    img {
        width: 130px;
        border-radius: 5px;
    }
}
</style>