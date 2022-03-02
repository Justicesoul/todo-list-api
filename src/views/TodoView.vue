<template>
  <Loading v-if="dataLoading" />
  <div v-else class="todo__list center">
    <h2>{{ `Task #${todo.id}: "${todo.name}"` }}</h2>
    <h2 :style="{ color: todo.done ? 'green' : 'red' }">
      {{ `(${todo.done ? 'Done' : 'Undone'})` }}
    </h2>
    <div class="todo__item">
      <div>
        <button
          title="Mark as done or undone"
          @click="toggleTodo(todo.done)"
          class="button"
        >
          {{ !todo.done ? 'Done' : 'Undone' }}
        </button>
        <button title="Delete this task" @click="deleteTodo" class="button">
          Delete
        </button>
      </div>
      <h4>
        {{ `Created: ${new Date(todo.createdAt).toLocaleString()}` }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import baseUrl from '../config/baseUrl';
import Loading from '@/components/Loading.vue';
import TodoType from '../config/todoType';

export default defineComponent({
  name: 'TodoView',

  data: () => ({
    dataLoading: true,
    todo: {} as TodoType,
  }),

  components: {
    Loading,
  },
  
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`${baseUrl}/${this.$route.params.id}`)
        .then(({ data }) => {
          this.todo = data;
        })
        .catch((error) => {
          alert(
            `${error.response.status} (${error.response.statusText}), try again`
          );
        })
        .finally(() => {
          this.dataLoading = false;
        });
    },

    deleteTodo() {
      this.dataLoading = true;
      axios
        .delete(`${baseUrl}/${this.$route.params.id}`)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          alert(
            `${error.response.status} (${error.response.statusText}), try again`
          );
        })
        .finally(() => {
          this.dataLoading = false;
        });
    },
    toggleTodo(completed: boolean) {
      this.dataLoading = true;
      axios
        .put(`${baseUrl}/${this.$route.params.id}`, {
          done: !completed,
        })
        .then(() => {
          this.getData();
        })
        .catch((error) => {
          alert(
            `${error.response.status} (${error.response.statusText}), try again`
          );
        })
        .finally(() => {
          this.dataLoading = false;
        });
    },
  },
});
</script>

<style lang="scss">
.center {
  margin: 50px auto 0;
}
</style>
