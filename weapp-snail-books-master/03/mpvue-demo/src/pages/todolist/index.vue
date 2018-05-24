<template>
  <div>
    <h1>vuejs is good</h1>
    <TodoList></TodoList>
  </div>
</template>
<script>
import TodoList from '@/components/Todolist'
export default {
  components: {
    TodoList
  }
}
</script>
<style>
h1{
  color:red;
}
</style>


