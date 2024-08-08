
<template>
  <div class="about">
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

/*    interface AnimalFacts {
        text: string
    } */
    interface Todo {
      id: number,
      name: string,
      description: string
    }

    async function fetchTodos() {
        const catFactsResponse = await axios.get<Todo[]>('http://localhost:3000/todos')
    }
    onMounted(async () => {
        await fetchTodos()
    })
</script>
