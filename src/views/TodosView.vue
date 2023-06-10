<script setup>
import { ref, watch } from 'vue';
import TodoCreator from '../components/TodoCreator.vue';
import { uid } from 'uid'
import TodoItem from '../components/TodoItem.vue';
import { Icon } from "@iconify/vue";
import TodoButton from '../components/TodoButton.vue';
import { computed } from '@vue/reactivity';

const todoList = ref([])

function setTodoListLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
}

function fetchTodoList() {
  const savedTodoList = JSON.parse(localStorage.getItem('todoList'))

  if (savedTodoList) {
    todoList.value = savedTodoList
  }
}

// Fetch todoList on page load
fetchTodoList()

// Everytime todoList updates, this will run
watch(
  todoList,
  () => {
    setTodoListLocalStorage()
  }, 
  {
    deep: true,
  }
) 

// Checks if all of the todos are completed
const todoCompleted = computed(() => {
  return todoList.value.every(item => item.isCompleted)
})

function createTodo(todo) {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
    isEditing: false,
  })
}

function toggleCompleted(todoPos) {
    todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted

}

function toggleEditTodo(todoPos) {
    todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing

}

function updateTodo(todoPos, todoVal) {
    todoList.value[todoPos].todo = todoVal 

}

function deleteTodo(todoId) {
    todoList.value = todoList.value.filter(item => item.id !== todoId)

}

</script>

<template>
  <main>
    <h1>Create Todo</h1>

    <TodoCreator @create-todo="createTodo" />
    
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem 
      v-for="(todo, index) in todoList"  
      :todo="todo" 
      :index="index"
      :todoVal="todo"
      @toggle-completed="toggleCompleted"
      @edit-todo="toggleEditTodo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    />
    </ul>
   
    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no todos! Add one!</span>
    </p>

    <!-- Displays a message if all todos are completed -->
    <p v-if="todoCompleted && todoList.length > 0" class="todos-msg">
       <Icon icon="noto-v1:party-popper" />
      <span>You have completed all todos!</span>
    </p>
  
  </main>
</template>


<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 16px;
    
    h1 {
      margin-bottom: 16px;
      text-align: center;
    }

    .todo-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-top: 24px;
      gap: 20px;
    }
    .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
  }
</style>
