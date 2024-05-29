<template>
  <button class="button" :class="typeClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'el-button',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
const typeClass = computed(() => `button-${props.type}`)
</script>

<style lang="scss" scoped>
.button {
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border: none;

  &-default {
    background-color: #007bff;
  }

  &-danger {
    background-color: #dc3545;
  }

  &-primary {
    background-color: #007bff;
  }

  &-warning {
    background-color: #ffc107;

  }
}
</style>
