<script>
</script>

<template>
    <div class="movie-details">
        <div class="content">
            <div class="card">
                <h1>Movie's Name</h1>
                <p>2023</p>
                <p>Something here and maybe more</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi debitis repellat, tempore rerum.</p>
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
    <div class="buttons-container">
        <button>Play</button>
        <button>Add my list</button>
        <button>More like this</button>
        <button>Not interested</button>
    </div>
</template>

<style lang="scss" scoped>
.movie-details {
    height: 100vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding-top: 90px;

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
        }

        .about {
            padding-left: 20px;
            background: #e8e8e8;
            border-radius: 10px;
            margin-bottom: 20px;
        }

    }
}

.buttons-container {
    margin-top: 5px;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: start;
    margin-left: 26px;

    button {
        border-radius: 10px;
        border: none;
        background: rgb(42, 41, 41);
        color: white;
        font-weight: 600;
        font-size: small;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;

    }
}</style>