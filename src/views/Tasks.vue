<template>
  <h1 class="text-white center" v-if="!flag"> Задач пока нет</h1>
  
  <template v-for="task in tasks" v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTask.length }}</h3>
    <div class="card" v-for="item in task" :key="item.id">
      <h2 class="card-title">
        {{ item.name }}
        <AppStatus :type="item.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ item.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push({path: `/task/${item.id}`})">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

import {useStore} from 'vuex'
import {computed, onMounted} from 'vue'


export default {
  setup() {
    const store = useStore()
    const tasks = store.state
  
    onMounted(() => {
      store.dispatch('getTasks')
    })
  
  
    return {
      tasks,
      activeTask: computed(() => store.getters.tasks.filter(e => e.status === 'active')),
      flag: computed(() => store.getters.tasks.length)
    }
  },
  components: {AppStatus}
}
</script>
