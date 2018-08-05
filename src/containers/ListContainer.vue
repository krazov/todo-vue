<template lang="pug">
List(:todos="todos")
</template>

<script>
import { mapGetters } from 'vuex';
import List           from '../components/List/List.vue';

export default {
    name: 'ListContainer',

    components: {
        List,
    },

    computed: {
        ...mapGetters(['todos']),
    },
};
</script>
