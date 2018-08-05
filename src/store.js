import Vue  from 'vue';
import Vuex from 'vuex';

import {
    TODO_ADDED,
    TODO_REMOVED,
    TODO_TOGGLED,
    FORM_SUBMITTED,
    TODO_TOGGLE_REQUESTED,
    TODO_DELETE_REQUESTED,
} from './constants/actions';

import { createTodo } from './helpers/todo-create.helper';
import { findIndex }  from './utils/store.util';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
    },

    getters: {
        todos: (state) => state.todos,
    },

    mutations: {
        [TODO_ADDED](state, todo) {
            state.todos.push(createTodo(todo));
        },

        [TODO_REMOVED](state, id) {
            const index = findIndex(state.todos, 'id', id);

            state.todos = [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index + 1),
            ];
        },

        [TODO_TOGGLED](state, id) {
            const index = findIndex(state.todos, 'id', id);

            state.todos = [
                ...state.todos.slice(0, index),
                {
                    id:   state.todos[index].id,
                    task: state.todos[index].task,
                    done: !state.todos[index].done,
                },
                ...state.todos.slice(index + 1),
            ];
        },
    },

    actions: {
        [TODO_ADDED]({ commit }, todo) {
            commit(TODO_ADDED, todo);
        },

        [TODO_REMOVED]({ commit }, id) {
            commit(TODO_REMOVED, id);
        },

        [TODO_TOGGLED]({ commit }, id) {
            commit(TODO_TOGGLED, id);
        },

        [FORM_SUBMITTED]({ dispatch }, todo) {
            dispatch(TODO_ADDED, todo);
        },

        [TODO_TOGGLE_REQUESTED]({ dispatch }, id) {
            dispatch(TODO_TOGGLED, id);
        },

        [TODO_DELETE_REQUESTED]({ dispatch }, id) {
            dispatch(TODO_REMOVED, id);
        },
    },
});
