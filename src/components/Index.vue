<template>
  <q-layout>
    <div slot="header">
      <toolbar></toolbar>
    </div>
    <div class="layout-view">
      <div class="column">
        <div style="height:40vh; overflow: scroll">
          <notes-list></notes-list>
        </div>
        <div style="height:50vh; background-color: #bab4ae">
          <editor></editor>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import Toolbar from './Toolbar'
  import NotesList from './NotesList'
  import Editor from './Editor'
  export default {
    components : {
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>


