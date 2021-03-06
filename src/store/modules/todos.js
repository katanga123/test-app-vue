import http from 'axios';

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  async fetchTodos({commit}) {
    const { data } = await http.get(`https://jsonplaceholder.typicode.com/todos`);
    commit('setTodos', data);
  }
}

const mutations = {
  setTodos: (state, todos) => { state.todos = todos }
}

export default {
  state,
  getters,
  actions,
  mutations
}