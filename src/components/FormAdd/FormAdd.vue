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
            if (this.task == '') {
                return;
            }

            this
                .handleSubmit(this.task)
                .then(() => {
                    this.task = '';
                });
        },
    },
};
</script>

<style scoped lang="stylus">
form
    bg($formBg)
    border 1px dashed white
    padding 20px
</style>
