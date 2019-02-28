import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    song: [],
    noteType: '',
    noteDuration: 0,
    test: 'this is a test',
    note: {},
    notes: [{
      id: 'C/4',
      type: 1,
      accidental: false,
    },
    {
      id: 'C#/4',
      type: 2,
      accidental: false,
    },
    {
      id: 'D/4',
      type: 1,
      accidental: true,
    },
    {
      id: 'D#/4',
      type: 2,
      accidental: false,
    },
    {
      id: 'E/4',
      type: 1,
      accidental: true,
    },
    {
      id: 'F/4',
      type: 1,
      accidental: false,
    },
    {
      id: 'F#/4',
      type: 2,
      accidental: false,
    },
    {
      id: 'G/4',
      type: 1,
      accidental: true,
    },
    {
      id: 'G#/4',
      type: 2,
      accidental: false,
    },
    {
      id: 'A/4',
      type: 1,
      accidental: true,
    },
    {
      id: 'A#/4',
      type: 2,
      accidental: false,
    },
    {
      id: 'B/4',
      type: 1,
      accidental: true,
    },
    {
      id: 'C/5',
      type: 1,
      accidental: false,
    },
    ],
  },
  mutations: {
    ADD_NOTE_TYPE(state, note) {
      /* eslint no-param-reassign: 2 */
      state.noteType = note.note;
      state.noteDuration = note.duration;
    },
    ADD_NOTE(state, note) {
      const {
        noteType,
        noteDuration,
      } = state;
      state.song.push({
        note: note.id,
        duration: noteType,
        value: noteDuration,
      });
    },
  },
  actions: {
    addNoteType({
      commit,
    }, note) {
      commit('ADD_NOTE_TYPE', note);
    },
    addNote({
      commit,
    }, note) {
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
