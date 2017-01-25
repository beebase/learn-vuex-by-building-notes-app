<template>
  <div class="list">
    <div class="item"
         :class="{'active': note === activeNote}"
         v-for="note in filteredNotes">
      <div class="item-content"
           @click="updateActiveNote(note)">
        {{note.text.trim().substring(0, 40) +'....'}}
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapState,
    mapActions
  } from 'vuex'
  export default {
    computed : {
      ...mapState(
        ['activeNote', 'filter']
      ),
      ...mapGetters(['filteredNotes'])
    },
    methods  : {
      ...mapActions(['updateActiveNote', 'toggleFilter'])
    }
  }
</script>
<style>
  active-select {
    background-color : #fff546 !important;
  }
</style>