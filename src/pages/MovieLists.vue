<script>
import AllComics from "../components/AllComics.vue"
import CharactersComp from "../components/CharactersComp"

export default {
    components: { AllComics, CharactersComp },
}
</script>

<template>
    <div class="banner">
        <div class="banner-img">
            <div class="contents">
                <h1>MARVEL COMİCS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus quae? Quod nulla velit
                    veritatis perferendis suscipit.</p>
                <div class="banner-buttons">
                    <button>More</button>
                    <button>My List</button>

                </div>
            </div>
        </div>
    </div>

    <AllComics />
    <CharactersComp />
</template>

<style lang="scss" scoped>
.banner {
    padding-top: 50px;
    width: 100%;
    height: 450px;
    color: #fff;
    position: relative;
    overflow: hidden;

    .banner-img {
        background-image: url("../assets/images/banner.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        transition: all .7s;
        object-fit: contain;
        background-position: bottom;
    }

    .banner-img::before {
        display: none;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(52, 73, 94, 0.75);
    }

    .banner-img:hover,
    .banner-img:focus {
        transform: scale(1.02);
        overflow: hidden;
    }

    .contents {
        padding-top: 150px;
        padding-bottom: 50px;
        text-align: left;
        padding-left: 30px;

        h1 {
            font-size: 3rem;
            font-weight: 800
        }

        p {
            width: 40rem;
            padding-left: 10px;
        }
    }

    .banner-buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 50rem;
        padding-left: 10px;
        margin-top: 20px;

        button {
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 10px;
            padding-top: 10px;
            background: #fff;
            border: none;
            border-radius: 5px;
            font-weight: 500;
            font-size: medium;

        }
    }
}

.banner:hover .banner:before,
.banner:focus .banner:before {
    display: block;
}
</style>
