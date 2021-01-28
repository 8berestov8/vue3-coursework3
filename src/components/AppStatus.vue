<template>
  <span
    :class="['badge', color]"
  > {{ status }}</span>
</template>

<script>

import {computed} from 'vue'

export default {
  props: ['type'],
  setup(props) {
  
    return {
      status: computed(() =>
        props.type == 'active' ? 'Активен' : '' ||
        props.type == 'done' ? 'Завершен' : '' ||
        props.type == 'cancelled' ? 'Отменен' : '' ||
        props.type == 'pending' ? 'Выполняется' : ''
      ),
      color: computed(() =>
        props.type == 'active' ? 'primary' : '' ||
        props.type == 'done' ? 'primary' : '' ||
        props.type == 'cancelled' ? 'danger' : '' ||
        props.type == 'pending' ? 'warning' : ''
      )
    }
  },
}
</script>
