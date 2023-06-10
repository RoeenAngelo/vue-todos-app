<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav class="container">
            <div class="branding">
                <RouterLink to="/">
                    <img src="@/assets/Vue_Logo_Black.png" alt="">
                </RouterLink>

                <RouterLink to="/">
                    <h1>Vue Todos</h1>
                </RouterLink>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </ul>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
header {
    background-color: #f1f1f1;
    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                max-width: 50px;
            }
            h1, a {
                text-decoration: none;
                font-size: 28px;
            }
        }
        
        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 12px;
            list-style: none;
            
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
</style>