<script>
export default {
    name: "AllComics",
    methods: {
        fetchData() {
    this.$store.dispatch('fetchData');
  },
    }
}
</script>

<template>
    <div class="comics-list">
        <h1>All Comics</h1>
        <div>
            <p>Data: {{ $store.state.data }}</p>
            <button @click="fetchData">fetch</button>
        </div>
        <ul>
            <li>
                <RouterLink to="/movie-details">
                    <img src="https://picsum.photos/200/300" alt="movie-img">
                    <div>
                        <h2>Movie's Name</h2>
                        <p>dsfsdfdsdsfdfsd</p>
                    </div>
                </RouterLink>

            </li>
            <li>
                <img src="https://picsum.photos/200/300" alt="movie-img">
                <div>
                    <h2>Movie's Name</h2>
                    <p>dsfsdfdsdsfdfsd</p>
                </div>
            </li>
            <li>
                <img src="https://picsum.photos/200/300" alt="movie-img">
                <div>
                    <h2>Movie's Name</h2>
                    <p>dsfsdfdsdsfdfsd</p>
                </div>
            </li>
            <li>
                <img src="https://picsum.photos/200/300" alt="movie-img">
                <div>
                    <h2>Movie's Name</h2>
                    <p>dsfsdfdsdsfdfsd</p>
                </div>
            </li>
            <li>
                <img src="https://picsum.photos/200/300" alt="movie-img">
                <div>
                    <h2>Movie's Name</h2>
                    <p>dsfsdfdsdsfdfsd</p>
                </div>
            </li>
            <li>
                <img src="https://picsum.photos/200/300" alt="movie-img">
                <div>
                    <h2>Movie's Name</h2>
                    <p>dsfsdfdsdsfdfsd</p>
                </div>
            </li>
        </ul>

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

    ul {
        list-style: none;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    li {
        cursor: pointer;
        transition: ease-in-out;

        img {
            border-radius: 5px;
        }
    }

    li:hover {
        transform: translateY(-0.5rem);
        transition-delay: 0.2s;
        transition-duration: 0.4s;
    }
}
</style>

