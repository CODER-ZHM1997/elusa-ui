<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button type="warning">Warning</el-button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

})
</script>

<style scoped>
button {
  margin-right: 30px;
}
</style>
