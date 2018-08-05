<template lang="pug">
main
    img(src='@/assets/logo.png')
    h1 Todo manager
    FormAddContainer
    ListContainer
</template>

<script>
import { mapGetters } from 'vuex';

import FormAddContainer from './containers/FormAddContainer.vue';
import ListContainer from './containers/ListContainer.vue';

export default {
    name: 'App',

    components: {
        FormAddContainer,
        ListContainer,
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
