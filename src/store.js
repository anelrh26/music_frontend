import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    song: [],
    noteType: '',
    note: '',
    notes: [
      {
        id: 'c4',
        type: 1,
        accidental: false,
      },
      {
        id: 'c#4',
        type: 2,
        accidental: false,
      },
      {
        id: 'd4',
        type: 1,
        accidental: true,
      },
      {
        id: 'd#4',
        type: 2,
        accidental: false,
      },
      {
        id: 'e4',
        type: 1,
        accidental: true,
      },
      {
        id: 'f4',
        type: 1,
        accidental: false,
      },
      {
        id: 'f#4',
        type: 2,
        accidental: false,
      },
      {
        id: 'g4',
        type: 1,
        accidental: true,
      },
      {
        id: 'g#4',
        type: 2,
        accidental: false,
      },
      {
        id: 'a4',
        type: 1,
        accidental: true,
      },
      {
        id: 'a#4',
        type: 2,
        accidental: false,
      },
      {
        id: 'b',
        type: 1,
        accidental: true,
      },
      {
        id: 'c5',
        type: 1,
        accidental: false,
      },
    ],
  },
  mutations: {
    ADD_NOTE_TYPE(state, noteType) {
      state.noteType = noteType;
    },
    ADD_NOTE(state, note) {
      const { noteType } = state;
      state.song.push(`${note}/${noteType}`);
    },
  },
  actions: {
    addNoteType({ commit }, noteType) {
      commit('ADD_NOTE_TYPE', noteType);
    },
    addNote({ commit }, note) {
      commit('ADD_NOTE', note);
    },
    fetchSongs() {
      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 1000,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
      axiosInstance
        .get('songs')
        .then((response) => {
          console.log('I fetched this for you', response.data);
        });
    },
  },
});
