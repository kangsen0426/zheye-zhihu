<template>
  <nav class="navbar-dark bg-primary justify-content-between mb-4 px-4">
    <div class="w-75 mx-auto navbar">
      <router-link to="/" class="navbar-brand">者也专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light my-2"
            >登陆</router-link
          >
        </li>
        <li class="list-inline-item">
          <router-link to="/signup" class="btn btn-outline-light my-2"
            >注册</router-link
          >
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <DropDown :title="`你好！${user.nickName}`">
            <DropDownItem>
              <router-link to="/create" class="dropdown-item"
                >新建文章</router-link
              >
            </DropDownItem>
            <DropDownItem>
              <router-link :to="`/column/${user.column}`" class="dropdown-item"
                >我的专栏</router-link
              >
            </DropDownItem>
            <DropDownItem>
              <router-link to="/edit" class="dropdown-item"
                >编辑资料</router-link
              >
            </DropDownItem>
            <DropDownItem>
              <router-link
                to="#"
                class="dropdown-item"
                @click.prevent="handleLogOut"
                >退出登录</router-link
              >
            </DropDownItem>
          </DropDown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DropDown from '@/components/DropDown.vue';
import DropDownItem from '@/components/DropDownItem.vue';
import store, { UserProps } from '@/store';
import createMessage from './createMessage';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropDown,
    DropDownItem,
  },
  setup() {
    const router = useRouter();
    const handleLogOut = () => {
      store.commit('logout');
      createMessage('退出登录成功，2s后跳转到首页', 'success', 2000);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    };
    return {
      handleLogOut,
    };
  },
});
</script>

<style scoped></style>
