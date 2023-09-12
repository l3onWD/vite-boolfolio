<script>
export default {


}
</script>


<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar">
            <div class="container">

                <!-- Brand -->
                <RouterLink :to="{ name: 'home' }" class="nav-brand">Boolfolio</RouterLink>

                <!-- Menu -->
                <ul class="nav-menu">

                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
                    </li>
                    <!-- 
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'project-list' }" class="nav-link">Progetti</RouterLink>
                    </li> -->

                </ul>

                <!-- Actions -->
                <ul class="nav-actions">
                    <li>
                        <a href="#" target="_blank">Twitter</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars' as *;

header {
    position: sticky;
    top: 0;

    box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.2);
}

.navbar {
    height: $page-header-height;

    background-color: $col-dark;

    .nav-brand {
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .nav-menu {
        a {
            font-weight: bold;
            text-transform: uppercase;
        }
    }
}
</style>