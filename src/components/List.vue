<template>
  <ul>
    <ListItem v-for="item in items" :key="item.id" :journey="item" class="list-item" />
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
  components: {
    ListItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup() {
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.list-item {
  margin-top: 8px;
}
</style>