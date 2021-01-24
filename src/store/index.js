import {createStore} from 'vuex'

import api from '../api/api'

export default createStore({
  state() {
    return {
      tasks: []
    }
  },
  getters: {
    tasks: state => state.tasks,
  },
  mutations: {
    setTasks: (state, payload) => (state.tasks = payload),
    addTask: (state, payload) => (state.tasks.push(payload)),
    updateTask: (state, payload) => (state.tasks.push(payload)),
  },
  actions: {
    getTasks: async context => {
      try {
        let {data} = await api.tasks.get()
        const items = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        context.commit('setTasks', items)
      } catch (error) {
        console.log(error)
      }
    },
    saveTask: async (context, payload) => {
      try {
        await api.tasks.post(payload)
        context.commit('addTask', payload)
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {}
})
