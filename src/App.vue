<template lang="pug">
main
    img(src='@/assets/logo.png')
    h1 Todo manager
    div
        section
            h2 Weekdays todos
            FormAddContainer
            ListContainer
        section
            h2 Weekends todos
            WeekendFormAddContainer
            WeekendListContainer
</template>

<script>
import { mapGetters } from 'vuex';

import FormAddContainer from './containers/FormAddContainer.vue';
import ListContainer from './containers/ListContainer.vue';
import WeekendFormAddContainer from './containers/WeekendFormAddContainer.vue';
import WeekendListContainer from './containers/WeekendListContainer.vue';

export default {
    name: 'App',

    components: {
        FormAddContainer,
        ListContainer,
        WeekendFormAddContainer,
        WeekendListContainer,
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
    padding 0 5px

div
    display flex

section
    padding 0 5px
    width 50%
</style>
