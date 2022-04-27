<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area text-center" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue';
import mitt from 'mitt';
type ValidateFunc = () => boolean;
export const emitter = mitt<{
  formItemCreated: ValidateFunc;
}>();
export default defineComponent({
  emits: ['form-submit'],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const submitForm = () => {
      // 遍历每一个验证函数
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit('form-submit', result);
    };

    const callback = (func?: ValidateFunc) => {
      // 接收验证函数
      if (func) {
        funcArr.push(func);
      }
    };

    // 表单创建，将验证函数push进队列中
    emitter.on('formItemCreated', callback);

    onBeforeUnmount(() => {
      emitter.off('formItemCreated', callback);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>

<style></style>
