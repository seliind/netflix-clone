<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue'

const route = useRoute();
const movieId = route.params.id
const movieDetails = ref()

onMounted(() => {
    fetchMovieDetails();
})

const fetchMovieDetails = async () => {
    await axios.get(`https://gateway.marvel.com/v1/public/comics/${movieId}`)
        .then((response) => {
            movieDetails.value = response.data.data.results
            console.log(movieDetails)
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
                <h1>{{ movie.title }}</h1>
                <p class="year">2023</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi debitis repellat, tempore rerum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
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
                    <button>Favorite</button>
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
        background-image: url("../../assets/images/marvel.webp");
        position: absolute;
        top: 67px;
        left: 0;
        width: 100%;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        z-index: -1;
    }

    .year {
        font-weight: 600;
        font-size: x-large;
    }
    p{
        font-weight: 600;
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

            .creators {
                margin-top: 20px;
                font-size: larger;

                ul {
                    li {
                        list-style: inside;
                        font-weight: 700;
                        color: #3e3c3c;

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
            background: #e8e8e8;
            box-shadow: 10px 5px 10px rgb(154, 149, 149);
        }
    }
}
</style>