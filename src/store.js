import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [{
      id: 'c4',
      type: 1,
      accidental: false,
    }, {
      id: 'c#4',
      type: 2,
      accidental: false,
    }, {
      id: 'd4',
      type: 1,
      accidental: true,
    }, {
      id: 'd#4',
      type: 2,
      accidental: false,
    }, {
      id: 'e4',
      type: 1,
      accidental: true,
    }, {
      id: 'f4',
      type: 1,
      accidental: false,
    }, {
      id: 'f#4',
      type: 2,
      accidental: false,
    }, {
      id: 'g4',
      type: 1,
      accidental: true,
    }, {
      id: 'g#4',
      type: 2,
      accidental: false,
    }, {
      id: 'a4',
      type: 1,
      accidental: true,
    }, {
      id: 'a#4',
      type: 2,
      accidental: false,
    }, {
      id: 'b',
      type: 1,
      accidental: true,
    }, {
      id: 'c5',
      type: 1,
      accidental: false,
    }],
  },
  mutations: {

  },
  actions: {

  },
});
