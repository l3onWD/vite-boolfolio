<script>
export default {


}
</script>


<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container">

                <!-- Brand -->
                <RouterLink :to="{ name: 'home' }" class="navbar-brand">Boolfolio</RouterLink>

                <!-- Menu -->
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>