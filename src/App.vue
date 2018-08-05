<template lang="pug">
main
    img(src='@/assets/logo.png')
    h1 Todo manager
    FormAdd
    List(:todos="todos")
</template>

<script>
import { mapGetters } from 'vuex';

import List    from './components/List/List.vue';
import FormAdd from './components/FormAdd/FormAdd.vue';

export default {
    name: 'App',

    components: {
        FormAdd,
        List,
    },

    computed: {
        ...mapGetters(['todos']),
    },
};
</script>

<style lang="stylus">
main
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
