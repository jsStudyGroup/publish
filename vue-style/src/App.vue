<template>
  <div>
    <vuep :template="code1" :scope="scope"></vuep>
    <vuep :template="code2"></vuep>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
  name: "app",
  data: () => {
    return { scope: { Layout } };
  },
  created: function() {
    this.code1 = `
<template>
  <div>
    Hello, {{ name }}!
    <Layout />
  </div>
<\/template>

<script>
  module.exports = {
    data: function () {
      return { name: 'Test1' }
    },
    components: {
      Layout
    }
  }
<\/script>`;

    this.code2 = `
<template>
  <div>Hello, {{ name }}!</div>
</template>

<script>
  module.exports = {
    data: function () {
      return { name: 'Test2' }
    }
  }
<\/script>`;
  }
};
</script>

<style lang="scss">
@import "./assets/scss/default.scss";
</style>
