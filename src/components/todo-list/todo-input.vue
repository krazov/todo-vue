<template lang="pug">
input(
    v-model="inputValue"
    @keypress.enter="process"
    @keydown.esc="handleCancel"
    @blur="handleCancel "
)
</template>

<script>
export default {
    name: "todo-input",

    props: {
        value: String,
        handleSave: Function,
        handleCancel: Function,
    },

    data() {
        return {
            inputValue: this.value,
        };
    },

    mounted() {
        this.$el.focus();
    },

    methods: {
        process() {
            this.handleSave(this.inputValue);
        },
    },
};
</script>

<style scoped lang="stylus">
input
    background-color white
    border 0 none
    font-family inherit
    font-size inherit
    outline 1px dashed lime
</style>

