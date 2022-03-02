<template>
  <div class="todo__menu">
    <input
      @change="$emit('createNewTask', $event.target.value)"
      class="todo__input"
      type="text"
      :value="todoInput"
      placeholder="Add a task"
    />
    <button title="Add a task" class="button" @click="createTodo">Add</button>
    <button title="Sort by name" class="button" @click="sortByName">
      {{ !sortByNameStatus ? 'Sort By Name' : 'Unsort' }}
    </button>
    <button
      title="Hide or show completed"
      class="button"
      @click="toggleCompletedTodos"
    >
      {{ showCompletedTasks ? 'Hide completed' : 'Show completed' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  props: {
    todoInput: String,
    createTodo: Function,
    sortByName: Function,
    sortByNameStatus: Boolean,
    toggleCompletedTodos: Function,
    showCompletedTasks: Boolean,
  },
});
</script>
<style scoped lang="scss"></style>
