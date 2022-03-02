<template>
  <router-link
    class="todo__link"
    :to="`/todo/${id}`"
    :style="{ color: done ? 'lightgreen' : 'black' }"
  >
    <h3 title="Show details">
      {{ `${index + 1}. ${name} (Task #${id})` }}
    </h3>
  </router-link>
  <div>
    <button
      title="Mark as done or undone"
      class="button"
      @click="toggleCompleteTodo(id, done)"
    >
      {{ !done ? 'Done' : 'Undone' }}
    </button>
    <button title="Delete this task" class="button" @click="deleteTodo(id)">
      Delete
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todo',
  props: {
    id: String,
    done: Boolean,
    index: Number,
    name: String,
    toggleCompleteTodo: Function,
    deleteTodo: Function,
  },
});
</script>
<style scoped lang="scss"></style>
