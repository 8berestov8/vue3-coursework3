<template>
  <div class="card" v-for="item in task" v-if="task.length">
    <h2>{{ item.name }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="item.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ item.date }}</p>
    <p><strong>Описание</strong>: {{ item.desc }}</p>
    <div>
      <button class="btn" @click="pending">Взять в работу</button>
      <button class="btn primary" @click="item.status = 'done'">Завершить</button>
      <button class="btn danger" @click="item.status = 'cancelled'">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

import {ref, watch, computed} from 'vue'


export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    let task = ref('')
    
    task = store.state.tasks.filter((e) => e.id === route.params.id)
    
    function pending() {
      task[0].status = 'pending'
    }
    
    return {
      task,
      pending
    }
  },
  components: {AppStatus}
}
</script>
