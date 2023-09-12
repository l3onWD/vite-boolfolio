<script>
export default {


}
</script>


<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand">
            <div class="container">

                <!-- Brand -->
                <RouterLink :to="{ name: 'home' }" class="navbar-brand">Boolfolio</RouterLink>

                <!-- Menu -->
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
                    </li>
                    <!-- 
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'project-list' }" class="nav-link">Progetti</RouterLink>
                    </li> -->

                </ul>

                <!-- Actions -->
                <ul class="mb-0">
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

    box-shadow: 0 0 8px 4px rgba($color: $col-dark, $alpha: 0.1);
}

.navbar {
    height: $page-header-height;


    color: $col-gray-500;
    background-color: $col-dark;

    .navbar-nav a.active,
    .navbar-brand {
        color: #fff;
    }

    a {
        color: $col-gray-500;

        &:hover {
            color: #fff;
        }
    }
}
</style>