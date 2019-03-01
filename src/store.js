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
    songs: [
      {
        id: 1,
        name: 'Tan tantan tan',
        tempo: 120,
        time_signature: '4/4',
        creation_date: '02/28/2019',
        notes: {
          id: 1,
          notes: 'C4,D4,E4,F4,G4,A4,B4,C5',
          note_durations: 'w,h,q,q,w,h,8,8',
        },
      },
      {
        id: 2,
        name: 'Test Song',
        tempo: 170,
        time_signature: '4/4',
        creation_date: '02/28/2019',
        notes: {
          id: 2,
          notes: 'F4,E5,D5,A4,F4,E5,D5,A4,F4',
          note_durations: 'q,q,8,q,q,q,8,q,q',
        },
      },
      {
        id: 3,
        name: 'Chord Song',
        tempo: 60,
        time_signature: '4/4',
        creation_date: '02/28/2019',
        notes: {
          id: 3,
          notes: 'C4,G4,A4,F4',
          note_durations: 'q,q,q,q',
        },
      },
    ],
    notes: [
      {
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
      const { noteType, noteDuration } = state;
      state.song.push({
        note: note.id,
        duration: noteType,
        value: noteDuration,
      });
    },
  },
  actions: {
    addNoteType({ commit }, note) {
      commit('ADD_NOTE_TYPE', note);
    },
    addNote({ commit }, note) {
      commit('ADD_NOTE', note);
    },
    fetchSongs() {
      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 1000,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      axiosInstance.get('songs').then((response) => {
        console.log('I fetched this for you', response.data);
      });
    },
  },
});
