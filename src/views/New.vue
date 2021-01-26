<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="nameTask">
    </div>
  
    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="dateTask">
    </div>
  
    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="descTask"></textarea>
    </div>
  
    <button class="btn primary" :disabled="disabled">Создать</button>
  </form>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const nameTask = ref('')
    const dateTask = ref('')
    const descTask = ref('')
    const status = ref('')
  
    const store = useStore()
    const router = useRouter()
  
    const disabled = computed(() => {
      return nameTask.value.length && dateTask.value.length && descTask.value.length ? false : true
    })
  
  
    function onSubmit() {
      if (dateTask.value >= new Date().toISOString().split('T')[0]) {
        status.value = 'active'
      } else {
        status.value = 'cancelled'
      }
    
      const tasks = {
        name: nameTask.value,
        date: dateTask.value,
        desc: descTask.value,
        status: status.value
      }
    
      store.dispatch('saveTask', tasks)
      router.push('/home')
    }
  
  
    return {
      nameTask,
      dateTask,
      descTask,
      disabled,
      onSubmit
    }
  }
}
</script>
