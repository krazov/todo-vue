<template lang="pug">
    todo-list(
        :todos="todos"
        :handleToggle="todoToggleRequested"
        :handleUpdate="todoUpdateRequested"
        :handleDelete="todoDeleteRequested"
    )
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { TODO_TOGGLE_REQUESTED, TODO_UPDATE_REQUESTED, TODO_DELETE_REQUESTED } from '../constants/actions';
    import TodoList from '../components/todo-list/todo-list.vue';

    export default {
        name: 'ListContainer',

        computed: {
            ...mapGetters('weekdays', ['todos']),
        },

        methods: {
            ...mapActions('weekdays', {
                todoToggleRequested: TODO_TOGGLE_REQUESTED,
                todoUpdateRequested: TODO_UPDATE_REQUESTED,
                todoDeleteRequested: TODO_DELETE_REQUESTED,
            }),
        },

        components: {
            TodoList,
        },
    };
</script>
