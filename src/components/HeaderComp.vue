<script></script>

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
            <li>Favorites</li>
        </ul>
        <div class="profile">
            <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    z-index: 1;
    height: 70px;
    width: 100%;
    position: fixed;
    background: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
    color: black;
    border-bottom: 1px solid #e8e8e8;

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
        }
    }

    .profile {
        padding: 10px;
        cursor: pointer;

        img {
            object-fit: cover;
            height: 50px;
            border-radius: 100%;
            border: 1.5px solid black;
        }
    }
}
</style>