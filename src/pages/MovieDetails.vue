<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref, computed } from 'vue'
import store from '@/store/store';

const route = useRoute();
const movieId = route.params.id;
const movieDetails = ref();
const movieName = ref();

const favoritesList = computed(() => store.state.favorites)
const isFavorite = computed(() => favoritesList.value.some(favorite => favorite === movieName.value));

const addTitleToFavorites = (title) => store.dispatch('add_title', { title: title })
const removeTitleFromList = (title) => store.dispatch("remove_title", { title: title })



onMounted(() => {
    fetchMovieDetails();
})

const fetchMovieDetails = async () => {
    await axios.get(`https://gateway.marvel.com/v1/public/comics/${movieId}`)
        .then((response) => {
            movieDetails.value = response.data.data.results
            movieName.value = response.data.data.results[0].title

        })
        .catch((error) => {
            console.log(error)
        })
}
</script>

<template>
    <div v-if="movieDetails === null">
        Loading...
    </div>
    <div v-else v-for="movie in movieDetails" :key="movie.id" class="movie-details">
        <div class="background"></div>
        <div class="content">
            <div class="card">
                <h1>{{ movie.title }}
                    <button v-if="!isFavorite" @click="addTitleToFavorites(movie.title)" class="favorite-bttn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                        </svg>
                    </button>
                    <button v-else @click="removeTitleFromList(movie.title)" class="favorite-bttn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </button>
                </h1>
                <p class="year">2023</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi debitis repellat, tempore rerum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. And it is really great, wow!</p>
                <div class="creators"><strong>Creators:</strong>
                    <ul>
                        <li v-for="creator in movie.creators.items" :key="creator.role">
                            {{ creator.name }} <span>as {{ creator.role }}</span>
                        </li>
                    </ul>

                </div>

                <div class="buttons-container">
                    <button class="play-button">Play</button>
                    <button>Add my list</button>
                </div>
            </div>
            <div class="about">
                <h1>About</h1>
                <p v-if="movie.description !== null">
                    {{ movie.description }}
                </p>
                <p v-else>
                    No description available.
                </p>
            </div>
        </div>
        <div class="img-container">
            <img :src="`${movie.images[0].path}.jpg`" alt="movie-img">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie-details {
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding-top: 90px;
    position: relative;

    .background {
        background-image: url("../assets/images/marvel.webp");
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0.1;
        z-index: -1;
    }

    .year {
        font-weight: bold;
        font-size: x-large;
    }

    p {
        font-weight: 300;
        font-size: large;
        color: #000000;
    }

    .img-container {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin-bottom: -16px;
        margin-right: 20px;
        padding: 20px;

        img {
            height: 31rem;
            border-radius: 5px;
        }
    }

    .content {
        position: relative;
        z-index: 2;
        grid-column: 1 / span 3;
        margin-left: 20px;
        padding-left: 20px;
        display: grid;
        grid-template-columns: auto;
        gap: 10px;

        .card {
            margin-top: 40px;
            padding-left: 20px;
            border-radius: 10px;
            margin-bottom: 20px;

            h1 {
                display: flex;
                align-items: center;

                .favorite-bttn {
                    margin-left: 20px;
                    border: none;
                    border-radius: 10px;
                }

                svg {
                    height: 2em;
                    cursor: pointer;
                }
            }

            .creators {
                margin-top: 20px;
                font-size: larger;

                ul {
                    li {
                        list-style: inside;
                        font-weight: 600;
                        color: black;

                        span {
                            color: #656464;
                        }
                    }
                }
            }

            .buttons-container {
                margin-top: 40px;
                display: flex;
                gap: 20px;
                align-items: center;
                justify-content: start;

                button {
                    cursor: pointer;
                    border-radius: 10px;
                    border: none;
                    background: rgb(42, 41, 41);
                    color: white;
                    font-weight: 600;
                    font-size: small;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px;
                    padding-inline: 40px;
                    outline: none;
                }

                .play-button {
                    animation-name: changeColor;
                    animation-duration: 10s;
                }

                button:hover {
                    outline: 2px solid black;
                    outline-offset: 3px;
                    background: rgb(32, 31, 31);
                }

                @keyframes changeColor {
                    0% {
                        background-color: #e50914;
                    }

                    25% {
                        background-color: purple;
                    }

                    50% {
                        background-color: blue;
                    }

                    100% {
                        background-color: #357C3C;
                    }
                }
            }
        }

        .about {
            border-top: 2px solid #e8e8e8;
            padding-left: 20px;
        }

    }
}

@media screen and (max-width: 900px) {
    .movie-details {
        display: flex;
        flex-direction: column;

        .content {
            grid-column: 1 / span 1;
        }

        .img-container {
            margin-bottom: 10px;
            box-shadow: 10px 5px 10px rgb(154, 149, 149);
        }
    }
}
</style>