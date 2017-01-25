<template>
  <div class="item-active" style="padding:20px; height: 100%">
    <textarea :value="activeNote.text"
              style="width:100%; height:100%; background-color: #f9ffbb"
    @change="editNote"></textarea>
  </div>
</template>
<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    computed : {
      ...mapState(['activeNote'])
    },
    methods  : {
      ...mapActions(['editNote'])
    }
  }
</script>