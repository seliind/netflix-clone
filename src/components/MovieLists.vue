<script>

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

    <div class="comics-list">
        <h1>All Comics</h1>
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

    <div class="characters">
        <h1>Check Out the Characters!</h1>
        <ul>
            <li>
                <img src="https://picsum.photos/200" alt="movie-img">
            </li>
            <li>
                <img src="https://picsum.photos/200" alt="movie-img">

            </li>
            <li>
                <img src="https://picsum.photos/200" alt="movie-img">

            </li>
            <li>
                <img src="https://picsum.photos/200" alt="movie-img">

            </li>
        </ul>
    </div>
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
        justify-content: space-around;
        gap: 20px;
        font-size: small;
     li{
        a{
            text-decoration: none !important;
            color: black;
            cursor: pointer;
        }
     }
    }

    img {
        width: 130px;
        border-radius: 5px;
    }
}
</style>
