<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const favorites = computed(() => store.state.favorites)

</script>

<template>
    <div class="navbar">
        <div class="logo">
            <RouterLink to="/">
                <img src="../assets/images/Logonetflix.png" alt="logo">
            </RouterLink>
        </div>
        <ul class="menu">
            <li>Movies</li>
            <li>Series</li>
            <li>Favorites <span>
                    {{ favorites.length }}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                </span>

            </li>
        </ul>
        <div class="profile">
            <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    z-index: 50;
    height: 70px;
    width: 100%;
    position: fixed;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
    color: #e8e8e8;

    .logo {
        display: flex;
        align-items: center;
        padding-left: 10px;

        img {
            object-fit: cover;
            width: 90px;
        }
    }

    ul {
        display: flex;
        gap: 36px;
        list-style: none;
        font-weight: 600;

        li {
            cursor: pointer;

            span {
                font-size: small;
                margin-left: 2px;

                svg {
                    fill: white;
                }
            }
        }
    }

    .profile {
        padding: 10px;
        cursor: pointer;

        img {
            object-fit: cover;
            height: 50px;
            border-radius: 100%;
        }
    }
}
</style>