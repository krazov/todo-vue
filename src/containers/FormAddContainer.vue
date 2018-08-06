<template lang="pug">
FormAdd(:handleSubmit="formSubmitted")
</template>

<script>
import { mapActions } from 'vuex';
import { FORM_SUBMITTED } from '../constants/actions';
import FormAdd from '../components/FormAdd/FormAdd.vue';

export default {
    name: 'FormAddContainer',

    components: { FormAdd },

    methods: {
        ...mapActions({
            formSubmitted: FORM_SUBMITTED,
        }),
    },
};
</script>
