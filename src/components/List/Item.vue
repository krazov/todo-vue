<template lang="pug">
li(:class="{ done: todo.done }")
    input(type="checkbox" @change="handleToggle")
    span {{ '#' + todo.id }}: {{ todo.task }}
    button(type="button" @click="handleDelete") Remove
</template>

<script>
import { mapActions } from 'vuex';

import { TODO_TOGGLE_REQUESTED, TODO_DELETE_REQUESTED } from '../../constants/actions';

export default {
    name: 'Item',

    props: {
        todo: Object,
    },

    data: () => ({
        editMode: false,
        task: '',
    }),

    methods: {
        ...mapActions({
            deleteTodoRequested: TODO_DELETE_REQUESTED,
            toggleRequested:     TODO_TOGGLE_REQUESTED,
        }),

        handleToggle() {
            this.toggleRequested(this.todo.id);
        },

        handleDelete() {
            this.deleteTodoRequested(this.todo.id);
        },
    },
};

// {
//     id:   Number,
//         task: String,
//     done: Boolean,
// }
</script>

<style scoped lang="stylus">
li
    list-style-type none
    padding 5px

    &.done
        color gainsboro
        text-decoration line-through

span
    padding-left 10px

button
    float right
</style>
