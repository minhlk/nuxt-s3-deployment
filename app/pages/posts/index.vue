<script setup lang="ts">
const todoId = ref(1)
const url = computed(() => {
  return 'https://jsonplaceholder.typicode.com/todos/' + todoId.value
  // return '/api/hello'
})

const { data, status } = useFetch(url)
const pending = computed(() => status.value == 'pending')
const color = useColor()
// await callOnce(color.getColor)
color.getColor
</script>
<template>
  <div>
    <AppAlert>
      This is a <b>posts</b> page
    </AppAlert>
    <input v-model="todoId" type="text" :disabled="pending">
    <div v-if="pending">
      Loading....
    </div>
    <div v-else>
      <pre>
        <code>
          {{ data }}
        </code>
      </pre>
    </div>
    <div>
      <input type="button" @click="color.getColor" value="Get Color"/>
      <br/>
      {{ color.name }}
      <br/>
      {{ color.color }}
      <br/>
      {{ color.count }}
    </div>
  </div>
</template>
