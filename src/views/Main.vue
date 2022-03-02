<template>
  <div class="todo">
    <Menu
      :todoInput="todoInput"
      :createTodo="createTodo"
      :showCompletedTasks="showCompletedTasks"
      :sortByName="sortByName"
      :sortByNameStatus="sortByNameStatus"
      :toggleCompletedTodos="toggleCompletedTodos"
      @createNewTask="todoInput = $event"
    />
    <Loading v-if="dataLoading" />
    <div v-else class="todo__list">
      <div
        class="todo__item"
        v-for="({ id, name, done }, index) in filteredTodos"
        :key="id"
      >
        <Todo
          :id="id"
          :name="name"
          :done="done"
          :index="index"
          :deleteTodo="deleteTodo"
          :toggleCompleteTodo="toggleCompleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from '@/components/Loading.vue';
import Menu from '@/components/Menu.vue';
import Todo from '@/components/Todo.vue';
import axios from 'axios';
import baseUrl from '../config/baseUrl';
import TodoType from '../config/todoType';

export default defineComponent({
  name: 'Home',

  data: () => ({
    todoInput: '',
    dataLoading: true,
    dataTodos: [] as TodoType[],
    sortByNameStatus: false,
    showCompletedTasks: true,
  }),

  components: {
    Loading,
    Todo,
    Menu,
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      axios
        .get(baseUrl)
        .then(({ data }) => {
          this.dataTodos = data;
        })
        .catch((error) => {
          alert(
            `${error.response.status} (${error.response.statusText}), try again`
          );
        })
        .finally(() => (this.dataLoading = false));
    },

    createTodo() {
      if (!this.todoInput.trim()) {
        alert('Please add a task');
      } else {
        this.dataLoading = true;
        axios
          .post(baseUrl, {
            name: this.todoInput,
          })
          .then(() => {
            this.getData();
            this.sortByNameStatus = false;
          })
          .catch((error) => {
            alert(
              `${error.response.status} (${error.response.statusText}), try again`
            );
          })
          .finally(() => {
            this.dataLoading = false;
            this.todoInput = '';
          });
      }
    },

    sortByName() {
      this.sortByNameStatus = !this.sortByNameStatus;
      this.dataLoading = true;
      if (!this.sortByNameStatus) {
        this.getData();
        return;
      } else {
        axios
          .get(`${baseUrl}?sortBy=name&order=desc`)
          .then(({ data }) => {
            this.dataTodos = data.reverse();
          })
          .catch((error) => {
            alert(
              `${error.response.status} (${error.response.statusText}), try again`
            );
          })
          .finally(() => {
            this.dataLoading = false;
            this.todoInput = '';
          });
      }
    },

    toggleCompleteTodo(id: string, completed: boolean) {
      this.dataLoading = true;
      axios
        .put(`${baseUrl}/${id}`, {
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

    deleteTodo(id: string) {
      this.dataLoading = true;
      axios
        .delete(`${baseUrl}/${id}`)
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

    toggleCompletedTodos() {
      this.showCompletedTasks = !this.showCompletedTasks;
    },
  },

  computed: {
    filteredTodos() {
      if (!this.showCompletedTasks) {
        return this.dataTodos.filter((todo) => {
          return !todo.done;
        });
      }
      return this.dataTodos;
    },
  },
});
</script>

<style lang="scss">
.todo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    width: 300px;
    font-size: 18px;
    padding: 5px 10px;
    border: 1px solid brown;
    color: brown;
    margin-bottom: 30px;
  }

  &__list {
    width: 700px;
    border: 1px solid brown;
    border-radius: 8px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &:nth-child(even) {
      background-color: rgb(255, 208, 208, 0.4);
    }
  }

  &__edit {
    font-size: 18px;
    font-weight: 700;
    font-style: italic;
    border: none;
    font-family: 'Times New Roman', Times, serif;
    padding: 19px 0;
    background-color: inherit;
  }

  &__link {
    text-decoration: none;
    cursor: pointer;
    &:hover > h3 {
      color: red;
    }
  }
}

.button {
  border-radius: 3px;
  padding: 10px 15px;
  background-color: brown;
  border: gray 1px solid;
  margin-left: 5px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: crimson;
  }
}

.loading__image {
  width: 400px;
}
</style>
