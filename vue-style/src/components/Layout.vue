<template>
  <div>
    <div class="layout-flexible-wrap">
      <div class="flexible-box" :class="item" v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["red", "blue", "green", "yellow"]
    };
  }
};
</script>

<style>
</style>