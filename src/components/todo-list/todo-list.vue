<template lang="pug">
ul(v-if="hasTodos")
    todo-item(
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :handleToggle="handleToggle"
        :handleUpdate="handleUpdate"
        :handleDelete="handleDelete"
    )
</template>

<script>
import TodoItem from './todo-item.vue';

export default {
    name: 'todo-list',

    props: {
        todos: {
            type: Array,
            required: true,
            default: () => [],
        },
        handleToggle: Function,
        handleUpdate: Function,
        handleDelete: Function,
    },

    computed: {
        hasTodos() {
            return this.todos.length > 0;
        },
    },

    components: {
        TodoItem,
    },
};
</script>

<style scoped lang="stylus">
ul
    border 1px dotted $listBorder
    padding 10px
    text-align left
</style>
