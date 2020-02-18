import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const instance = axios.create({
  baseURL: `https://todo-list-stark.herokuapp.com/api`,
  headers: { "Content-Type": "application/json" },
  responseType: "json"
});

export default new Vuex.Store({
  state: {
    todos: []
  },

  getters: {
    getTodos: state => {
      return state.todos;
    }
  },

  mutations: {
    loadTodos(state, todos) {
      let parsedTodos = JSON.parse(JSON.stringify(todos.data));
      state.todos = parsedTodos;
    },

    addTodo(state, todo) {
      state.todos.push(todo);
    },

    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    }
  },

  actions: {
    loadTodos({ commit }) {
      instance.get(`/todos`).then(res => commit("loadTodos", res.data));
    },

    addTodo({ commit }, todo) {
      instance.post(`/todo?todo=${todo.todo}&image_url=${todo.image_url}`)
      .then(res => {
        let committedTodo = todo
        committedTodo.id = res.data.data.id
        commit("addTodo", committedTodo);
      })
    },

    deleteTodo({ commit }, todo) {
      let realId = JSON.parse(JSON.stringify(todo.id.id));
      instance.delete(`/todo/${realId}`);
      commit("deleteTodo", todo.index);
    }
  }
});
