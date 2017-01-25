<template>
  <div class="toolbar">
    <button @click="addNote">
      <i>add</i>
    </button>
    <button @click="toggleFavorite"
            :class="{'text-green': activeNote.favorite}">
      <i>star</i>
    </button>
    <button @click="deleteNote">
      <i>remove</i>
    </button>
    <q-toolbar-title :padding="0">
      Notes (total: {{getNoteCount}})
    </q-toolbar-title>
    <button class="white outline"
            style="width:100px"
            @click="toggleFilter">{{filter}}
    </button>
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
      ...mapGetters(
        ['getNoteCount']
      ),
      ...mapState(['activeNote', 'filter'])
    },
    methods  : {
      ...mapActions(
        ['addNote',
         'deleteNote',
         'toggleFavorite',
         'toggleFilter']
      )
    }
  }

</script>
