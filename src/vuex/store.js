import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// contains the state of entire app
const state     = {
  notes      : [],   // [{text:'', favorite:bool},{},...]
  activeNote : {},   //  {text:'', favorite:bool}
  filter     : 'all' // or 'favorites
}
// getters
const getters   = {
  filteredNotes : (state) => {
    if (state.filter === 'favorites') {
      return state.notes.filter((note) => note.favorite)
    }
    else {
      return state.notes
    }
  },
  getActiveNote : state => state.activeNote,
  getNoteCount  : state => state.notes.length
}
// mutations
const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text     : 'New Note ' + (state.notes.length + 1),
      favorite : false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE (state, text) {
    console.log('store.mutations.editNote', text)
    state.activeNote.text = text
  },
  DELETE_NOTE (state) {
    // get index of active note in order to delete
    // with .splice()
    let index = null
    for (let i in state.notes) {
      if (state.notes[i] === state.activeNote) {
        index = i
        break
      }
    }
    // delete
    state.notes.splice(index, 1)
    // activate the first note in the list
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  TOGGLE_FILTER(state) {
    state.filter = state.filter === 'all' ? 'favorites' : 'all'
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}
const actions   = {
  //(es6) {commit} is context.commit
  addNote          : ({commit}) => {
    commit('ADD_NOTE')
  },
  editNote         : ({commit}, e) => {
    commit('EDIT_NOTE', e.target.value)
  },
  deleteNote       : ({commit}) => {
    commit('DELETE_NOTE')
  },
  updateActiveNote : ({commit}, note) => {
    commit('SET_ACTIVE_NOTE', note)
  },
  toggleFilter     : ({commit}) => {
    commit('TOGGLE_FILTER')
  },
  toggleFavorite   : ({commit}) => {
    commit('TOGGLE_FAVORITE')
  }
}
const store     = new Vuex.Store({state, mutations, actions, getters})
export default store
