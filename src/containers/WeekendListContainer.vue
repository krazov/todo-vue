<template lang="pug">
List(
    :todos="todos"
    :handleToggle="todoToggleRequested"
    :handleUpdate="todoUpdateRequested"
    :handleDelete="todoDeleteRequested"
)
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { TODO_TOGGLE_REQUESTED, TODO_UPDATE_REQUESTED, TODO_DELETE_REQUESTED } from '../constants/actions';
import List from '../components/List/List.vue';

export default {
    name: 'WeekendListContainer',

    computed: {
        ...mapGetters('weekends', ['todos']),
    },

    methods: {
        ...mapActions('weekends', {
            todoToggleRequested: TODO_TOGGLE_REQUESTED,
            todoUpdateRequested: TODO_UPDATE_REQUESTED,
            todoDeleteRequested: TODO_DELETE_REQUESTED,
        }),
    },

    components: {
        List,
    },
};
</script>
