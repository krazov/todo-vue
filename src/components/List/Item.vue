<template lang="pug">
li(:class="{ done: todo.done }")
    input(
        type="checkbox"
        @change="handleToggle({ id: todo.id })"
    )

    span(
        v-if="!editMode"
        @click="edit"
    ) {{ '#' + todo.id }}: {{ todo.task }}

    span(v-if="editMode")
        | {{ '#' + todo.id }}:
        |
        input(
            v-model="task"
            @blur="save"
            @keypress.enter="save"
        )

    button(
        type="button"
        @click="handleDelete(todo.id)"
    ) Remove
</template>

<script>
export default {
    name: 'Item',

    props: {
        todo:         Object,
        handleToggle: Function,
        handleUpdate: Function,
        handleDelete: Function,
    },

    data: () => ({
        editMode: false,
        task:     '',
    }),

    methods: {
        edit() {
            this.task     = this.todo.task;
            this.editMode = !this.editMode;
        },

        save() {
            this
                .handleUpdate({
                    id:   this.todo.id,
                    task: this.task,
                })
                .then(() => {
                    this.editMode = false;
                });
        },
    },
};
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
