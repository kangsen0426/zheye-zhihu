<template>
  <nav
    class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4"
    style="background-color: #42b983"
  >
    <router-link class="navbar-brand" to="/">者也专栏</router-link>
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
        <dropdown-vue :title="`你好 ${user.name}`">
          <dropdown-item-vue>
            <router-link to="/create" class="dropdown-item">
              新建文章
            </router-link>
          </dropdown-item-vue>
          <dropdown-item-vue disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item-vue>

          <!-- <dropdown-item
            ><router-link :to="`/column/${user.column}`" class="dropdown-item"
              >我的专栏</router-link
            ></dropdown-item
          > -->

          <dropdown-item-vue>
            <a href="#" class="dropdown-item">退出登陆</a>
          </dropdown-item-vue>
        </dropdown-vue>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DropdownVue from './Dropdown.vue';
import DropdownItemVue from './DropdownItem.vue';

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropdownVue,
    DropdownItemVue,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style></style>
