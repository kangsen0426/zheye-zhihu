<template>
  <div class="container" id="app">
    <global-header-vue :user="user"></global-header-vue>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 引入样式
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalHeaderVue, { UserProps } from './components/GlobalHeader.vue';

const currentUSer: UserProps = {
  isLogin: false,
};

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeaderVue,
  },
  setup() {
    return {
      user: currentUSer,
    };
  },
});
</script>
