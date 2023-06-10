<script setup>
import { ref, defineEmits, reactive } from 'vue';
import TodoButton from './TodoButton.vue'

const emit = defineEmits(['create-todo']);

// const todo = ref(''); 
// function createTodo() {
//     emit('create-todo', todo.value)
// }   

const todoState = reactive({
    todo: '',
    invalid: false,
    errMsg: '',
})

function createTodo() {
    todoState.invalid = false

    if (todoState.todo !== '') {
        emit('create-todo', todoState.todo)
        todoState.todo = ''
        return
    }
    todoState.invalid = true
    todoState.errMsg = 'Todo value cannot be empty'
}
</script>


<template>
    <div class="input-wrap" :class="{ 'input-err' : todoState.invalid }">
        <input type="text" v-model="todoState.todo" />
        <!-- <button @click="createTodo()">Create</button> -->
        <TodoButton @click="createTodo()" />
    </div>
    <p v-show="todoState.invalid" class="err-msg" >{{ todoState.errMsg }}</p>
</template>



<style lang="scss" scoped>
    .input-wrap {
        border: 2px solid #41b080;
        display: flex;
        justify-content: space-between;
        transition: 250ms ease;

        &:focus-within {
            box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
            0 -2px 4px -2px rgb(0 0 0 / 0.1);
        }
        &.input-err {
        border: 2px solid red;
        }

        input {
            border: none;
            width: 100%;
            padding: 8px 6px;

            &:focus {
                outline: none;
            }
        }

        // button {
        //     padding: 8px 16px;
        //     border: none;
        //     cursor: pointer;
        // }
        
    }
    
    .err-msg {
            margin-top: 6px;
            font-size: 12px;
            text-align: center;
            color: red;
        }
</style>