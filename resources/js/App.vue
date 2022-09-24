<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link class="navbar-brand" :to="{name :'home' }">Home </router-link>
        <router-link class="text-white" :to="{name : 'about' }">About</router-link>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
