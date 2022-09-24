<template>
    <h1>Hello Home</h1>
    <h2 v-for="(user, uIdx) in user.users">
        {{ user.name }}
    </h2>
</template>

<script>

import {mapState} from "vuex";

export default {
    name: "Home",

    created() {
        this.fetchUsers().then(() => {
            console.log(this.user.users)
        });
    },

    mounted() {
    },
    methods: {
        async fetchUsers(){
            return this.$store.dispatch('user/getUsers');
        }
    },

    computed: {
        ...mapState([
            'user'
        ])
    }
}
</script>

<style scoped>

</style>
