// // import Vue from "vue";
// // import Vuex from "vuex";
// // Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     todos: [],
//     sequence: 1
//   },
//   getters: {
//     // doneTodos: state => {
//     //   return state.todos.filter(todo => todo.done);
//     // },
//     // notDoneTodos: state => {
//     //   return state.todos.filter(todo => !todo.done);
//     // },
//     // todosCount: state => {
//     //   return state.todos.length;
//     // },
//     // doneTodosCount: (state, getters) => {
//     //   return getters.doneTodos.length;
//     // },
//     // notDoneTodosCount: (state, getters) => {
//     //   return getters.notDoneTodos.length;
//     // },
//     // getTodoById: state => id => {
//     //   return state.todos.find(todo => todo.id === id);
//     // }
//   },
//   mutations: {
//     // setTodos(state, todos) {
//     //   state.todos = todos;
//     // },
//     // setSequence(state, sequence) {
//     //   state.sequence = sequence;
//     // },
//     // create(state, { title, detail }) {
//     //   const todo = {
//     //     id: state.sequence,
//     //     title: title,
//     //     detail: detail,
//     //     done: false
//     //   };
//     //   state.todos.push(todo);
//     //   state.sequence++;
//     // },
//     // update(state, { id, title, detail }) {
//     //   const index = state.todos.findIndex(todo => todo.id === id);
//     //   if (index >= 0) {
//     //     state.todos[index].title = title;
//     //     state.todos[index].detail = detail;
//     //   }
//     // },
//     // delete(state, id) {
//     //   const index = state.todos.findIndex(todo => todo.id === id);
//     //   if (index >= 0) {
//     //     state.todos.splice(index, 1);
//     //   }
//     // },
//     // changeDone(state, id) {
//     //   const index = state.todos.findIndex(todo => todo.id === id);
//     //   if (index >= 0) {
//     //     state.todos[index].done = !state.todos[index].done;
//     //   }
//     // }
//   },
//   actions: {
//     // readTodos({ commit }) {
//     // //   //外部から取得したという想定
//     // //   let todos = [
//     // //     {
//     // //       id: 1,
//     // //       title: "Vuexの記事を書く",
//     // //       detail: "頑張って書きます",
//     // //       done: false
//     // //     },
//     // //     {
//     // //       id: 2,
//     // //       title: "Nuxtの記事を書く",
//     // //       detail: "頑張って書きますよ",
//     // //       done: true
//     // //     }
//     // //   ];
//     // //   let sequence = 3;
//     // //   commit("setTodos", todos);
//     // //   commit("setSequence", sequence);
//     // },
//     // createTodo({ commit }, todo) {
//     //   commit("create", todo);
//     // },
//     // updateTodo({ commit }, todo) {
//     //   commit("update", todo);
//     // },
//     // deleteTodo({ commit }, id) {
//     //   commit("delete", id);
//     // },
//     // changeDone({ commit }, id) {
//     //   commit("changeDone", id);
//     // }
//   }
// });
