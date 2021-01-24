<template>
  <h1 class="text-white center" v-if="tasks.length == ''">Задач пока нет</h1>
  
  <template v-for="task in tasks" v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
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


export default {
  setup() {
    const store = useStore()
    
    return {
      tasks: store.state,
      getTasks: store.dispatch('getTasks'),
    }
  },
  components: {AppStatus}
}
</script>
