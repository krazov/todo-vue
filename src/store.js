import Vue from 'vue';
import Vuex from 'vuex';

import {
    TODO_ADDED,
    TODO_TOGGLED,
    TODO_UPDATED,
    TODO_REMOVED,
    FORM_SUBMITTED,
    TODO_TOGGLE_REQUESTED,
    TODO_UPDATE_REQUESTED,
    TODO_DELETE_REQUESTED,
} from './constants/actions';

import { createTodo } from './helpers/todo-create.helper';
import { findIndex } from './utils/store.util';

Vue.use(Vuex);

const todosStore = {
    namespaced: true,

    state: () => ({
        todos: [],
    }),

    getters: {
        todos: (state) => state.todos.slice().sort((a, b) => a.done == b.done ? a.id - b.id : a.done - b.done),
    },

    mutations: {
        [TODO_ADDED](state, todo) {
            state.todos.push(createTodo(todo));
        },

        [TODO_UPDATED](state, { id, task }) {
            console.log(`Mutation of todo #${id} about to happen`);

            const index    = findIndex(state.todos, 'id', id);
            const { done } = state.todos[index];

            state.todos = [
                ...state.todos.slice(0, index),
                { id, task, done },
                ...state.todos.slice(index + 1),
            ];


            console.log(`Mutation of todo #${id} happened`);
        },

        [TODO_TOGGLED](state, { id }) {
            const index          = findIndex(state.todos, 'id', id);
            const { task, done } = state.todos[index];

            state.todos = [
                ...state.todos.slice(0, index),
                { id, task, done: !done },
                ...state.todos.slice(index + 1),
            ];
        },

        [TODO_REMOVED](state, id) {
            const index = findIndex(state.todos, 'id', id);

            state.todos = [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index + 1),
            ];
        },
    },

    actions: {
        [TODO_ADDED]({ commit }, todo) {
            commit(TODO_ADDED, todo);
        },

        [TODO_TOGGLED]({ commit }, { id }) {
            commit(TODO_TOGGLED, { id });
        },

        [TODO_UPDATED]({ commit }, { id, task }) {
            console.log(`[TODO_UPDATED] Request for mutation of todo #${id}`);

            commit(TODO_UPDATED, { id, task });

            console.log(`[TODO_UPDATED] Request for mutation of todo #${id} has been committed`);
        },

        [TODO_REMOVED]({ commit }, id) {
            commit(TODO_REMOVED, id);
        },

        [FORM_SUBMITTED]({ dispatch }, todo) {
            dispatch(TODO_ADDED, todo);
        },

        [TODO_TOGGLE_REQUESTED]({ dispatch }, { id }) {
            dispatch(TODO_TOGGLED, { id });
        },

        [TODO_UPDATE_REQUESTED]({ dispatch }, { id, task }) {
            console.log(`[TODO_UPDATE_REQUESTED] Update of todo #${id} has been requested`);

            dispatch(TODO_UPDATED, { id, task });

            console.log(`[TODO_UPDATE_REQUESTED] Update of todo #${id} has been fulfilled`);

            return `Todo #${id} has been updated`;
        },

        [TODO_DELETE_REQUESTED]({ dispatch }, id) {
            dispatch(TODO_REMOVED, id);
        },
    },
};

export default new Vuex.Store({
    modules: {
        weekdays: todosStore,
        weekends: todosStore,
    },
});
