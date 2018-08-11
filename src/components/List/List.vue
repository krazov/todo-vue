<template lang="pug">
ul(v-if="hasTodos")
    Item(
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :handleToggle="handleToggle"
        :handleUpdate="handleUpdate"
        :handleDelete="handleDelete"
    )
</template>

<script>
import Item from './Item.vue';

export default {
    name: 'List',

    props: {
        todos:        Array,
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
        Item,
    },
};
</script>

<style scoped lang="stylus">
ul
    border 1px dotted $listBorder
    padding 10px
    text-align left
</style>
