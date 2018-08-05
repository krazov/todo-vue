<template lang="pug">
form(@submit.prevent="onSubmit")
    input(type="text" v-model="task")
    button(type="submit") Add todo
</template>

<script>
export default {
    name: 'FormAdd',

    props: {
        handleSubmit: Function,
    },

    data: () => ({
        task: '',
    }),

    methods: {
        onSubmit() {
            this.handleSubmit(this.task);
            this.task = '';
        },
    },
};
</script>

<style scoped lang="stylus">
form
    background-color gainsboro
    border 1px dashed white
    padding 20px
</style>
