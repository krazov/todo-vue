<template lang="pug">
ul(v-if="hasTodos")
    Item(v-for="todo in todos" :key="todo.id" :todo="todo")
</template>

<script>
import Item from './Item.vue';

export default {
    name: "List",

    props: {
        todos: Array,
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

// TODO: check if can be validated id detail
// [
//     {
//         id: Number,
//         task: String,
//         done: Boolean,
//     },
// ],
</script>

<style scoped lang="stylus">
ul
    border 1px dotted dimgray
    padding 10px
    text-align left
</style>
