<template>
  <div class="app">
    <input class="search-input" v-model="searchName" @input="onChangeName"/>
    <div v-if="screen1">
      <List :items="journies" />
    </div>
    <div v-else>
      <List :items="[selectedItem]" />
      <!-- <ListItem :journey="selectedItem" /> -->
      <p class="note">Related Items</p>
      <List :items="relatedItems" />
    </div>
  </div>
</template>

<script>
import {
  GET_JOURNEY,
  FETCH_JOURNEY,
  SEARCH_JOURNEY,
  GET_SCREEN,
  GET_SELECTEDITEM,
  GET_RELATEDITEMS
} from './store/types'
import { ref, computed } from "vue"; 
import { useStore } from 'vuex';
import List from './components/List';
import ListItem from './components/ListItem';
export default {
  components: {
    List,
    ListItem
  },
  setup() {
    // const capacity = ref(3);
    // const screen1 = ref(true);
    const searchName = ref("");
    const store = useStore();
    const journies = computed(() => store.getters[GET_JOURNEY]);
    const screen1 = computed(() => store.getters[GET_SCREEN]);
    const selectedItem = computed(() => store.getters[GET_SELECTEDITEM]);
    const relatedItems = computed(() => store.getters[GET_RELATEDITEMS]);
    store.dispatch(FETCH_JOURNEY);

    function onChangeName() {
      // console.log('[change name]', searchName.value);
      store.dispatch(SEARCH_JOURNEY, searchName.value);
    }
    return { journies, screen1, searchName, selectedItem, relatedItems, onChangeName };
  }
};
</script>

<style scoped>
.app {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
.search-input {
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
.note {
  margin: 10px auto;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
</style>
