<template>
  <div class="card" v-for="item in task" v-if="task.length">
    <h2>{{ item.name }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="item.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ item.date }}</p>
    <p><strong>Описание</strong>: {{ item.desc }}</p>
    <div>
      <button class="btn" @click="pending(item)">Взять в работу</button>
      <button class="btn primary" @click="done(item)">Завершить</button>
      <button class="btn danger" @click="cancelled(item)">Отменить</button>
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

import {computed} from 'vue'


export default {
  setup() {
    const route = useRoute()
    const store = useStore()
  
    function pending(item) {
      item.status = 'pending'
      store.dispatch('changeStatus', item)
    }
  
    function done(item) {
      item.status = 'done'
      store.dispatch('changeStatus', item)
    }
  
    function cancelled(item) {
      item.status = 'cancelled'
      store.dispatch('changeStatus', item)
    }
  
    return {
      task: computed(() => store.getters.tasks.filter((e) => e.id === route.params.id)),
      pending,
      done,
      cancelled
    }
  },
  components: {AppStatus}
}
</script>
