<template lang="pug">
form(@submit.prevent="onSubmit")
    input(type="text" v-model="todo")
    button(type="submit") Add todo
</template>

<script>
import { mapActions } from 'vuex';

import { FORM_SUBMITTED } from '../../constants/actions';

export default {
    name: 'FormAdd',

    data: () => ({
        todo: '',
    }),

    computed: {
        // TODO: isEmpty
    },

    methods: {
        ...mapActions({
            formSubmitted: FORM_SUBMITTED,
        }),

        onSubmit() {
            if (this.todo === '') {
                return;
            }

            this.formSubmitted(this.todo);
            this.todo = '';
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
