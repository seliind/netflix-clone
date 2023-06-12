<script>
</script>

<template>
    <div class="movie-details">
        <div class="content">
            <div class="card">
                <h1>Movie's Name</h1>
                <p class="year">2023</p>
                <p>Something here and maybe more</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi debitis repellat, tempore rerum.</p>
                <div class="buttons-container">
                    <button class="play-button">Play</button>
                    <button>Add my list</button>
                    <button>Favorite</button>
                </div>
            </div>
            <div class="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi debitis repellat, tempore rerum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reprehenderit eveniet sint officiis
                    commodi atque placeat autem dolorem minima fugiat voluptas ex debitis, temporibus incidunt? Consequuntur
                    quo voluptate illum distinctio.
                </p>
            </div>
        </div>
        <div class="img-container">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a.jpg" alt="movie-banner">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie-details {
    height: 100vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding-top: 90px;
    margin-bottom: 30px;

    .year {
        font-weight: 500;
    }

    .img-container {
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
                }

                .play-button {
                    animation-name: changeColor;
                    animation-duration: 10s;
                }
                button:hover{
                    transform: rotate(5deg);
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
            border-top: 1px solid #e8e8e8;
            padding-left: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

    }
}
</style>