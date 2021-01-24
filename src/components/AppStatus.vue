<template>
  <span
    :class="['badge', color]"
  > {{ status }}</span>
</template>

<script>

import {ref} from 'vue'

export default {
  props: ['type'],
  setup(props) {
    let status = ref('')
    let color = ref('')
  
    if (props.type == 'active') {
      status = 'Активен'
      color = 'primary'
    } else if (props.type == 'done'){
      status = 'Завершен'
      color = 'primary'
    }else if (props.type == 'cancelled'){
      status = 'Отменен'
      color = 'danger'
    }else if (props.type == 'pending'){
      status = 'Выполняется'
      color = 'warning'
    }

    return {
      status,
      color
    }
  },
}
</script>
