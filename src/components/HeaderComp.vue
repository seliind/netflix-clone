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
            <li>Favorites <span>5</span></li>
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
            span{
                background: white;
                color: black;
                margin-left: 4px;
                padding: 5px 6px 5px 6px;
                border-radius: 100%;
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