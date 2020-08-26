import axios from '../axios';
import {
  FETCH_JOURNEY,
  SET_JOURNEY,
  GET_JOURNEY,
  SEARCH_JOURNEY,
  CHANGE_SCREEN,
  GET_SCREEN,
  GET_SELECTEDITEM,
  GET_RELATEDITEMS
} from './types';

import Journey from '../models/journey';

const state = {
  total: [],
  journies: [],
  screen1: true,
  selectedItem: "",
  relatedItems: []
}

const actions = {
  async [FETCH_JOURNEY](context) {
    try {
      const res = await axios.get('/journey');
      console.log('[res]', res);
      context.commit(SET_JOURNEY, res.data.data.items);
      context.commit('setTotal', res.data.data.items)
      return Promise.resolve(res);
    } catch (err) {
      console.log('[error]', err);
      return Promise.reject();
    }
  },

  [SEARCH_JOURNEY](context, searchKey) {
    console.log(context.state.journies, searchKey);
    const filterd = context.state.journies.filter(
      (jrn) => {
        return jrn.name.toLowerCase().includes(searchKey.toLowerCase());
      }
    );
    context.commit(SET_JOURNEY, filterd);
  }
}


const mutations = {
  [SET_JOURNEY](state, payload)  {
    state.journies = []
    for (const item of payload) {
      const journeyItem = new Journey(item);
      state.journies.push(journeyItem);
    }
  },
  [CHANGE_SCREEN](state, { screen, item }) {
    state.screen1 = screen;
    state.selectedItem = item;
    state.relatedItems = state.total.filter((jrn) => {
      console.log( state.selectedItem.__related_id, jrn);
      return state.selectedItem.__related_id.includes(jrn.id);
    });
    console.log('[item]', state.selectedItem);
    console.log('[related]', state.relatedItems);
  },

  setTotal(state, payload) {
    state.total = []
    for (const item of payload) {
      const journeyItem = new Journey(item);
      state.total.push(journeyItem);
    }
  }
}

const getters = {
  [GET_JOURNEY] : (state) => state.journies,
  [GET_SCREEN]: (state) => state.screen1,
  [GET_SELECTEDITEM]: (state) => state.selectedItem,
  [GET_RELATEDITEMS]: (state) => state.relatedItems
}

export default {
  state,
  actions,
  mutations,
  getters
}