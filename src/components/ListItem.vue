<template>
  <li :class="{ selected: selected }" @click="onClickItem">
    {{ journey.name }}
  </li>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { CHANGE_SCREEN, GET_SELECTEDITEM } from '../store/types';
export default {
  props: {
    journey: {
      type: Object,
      default: () => {}
    },
    // selected: {
    //   type: Boolean,
    //   default: false
    // }
  },

  setup(props) {
    const store = useStore();
    const selected = computed(() => props.journey.id === store.getters[GET_SELECTEDITEM].id);
    function onClickItem() {
      store.commit(CHANGE_SCREEN, {
        screen:false,
        item: props.journey
      });
    }

    return { selected, onClickItem }
  }
}
</script>

<style scoped>
li {
  padding: 10px;
  border: 1px solid #cccccc;
  text-align: center;
  cursor: pointer;
}
li:hover {
  background: #bbbbbb;
} 
li.selected {
  background: #b6d7a8;
}
</style>
