import { onMounted, onBeforeUnmount, ref, Ref } from 'vue';

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value?.contains(e.target as HTMLElement)) {
      isClickOutside.value = false;
    } else {
      isClickOutside.value = true;
    }
  };
  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onBeforeUnmount(() => {
    document.removeEventListener('click', handler);
  });

  return isClickOutside;
};

export default useClickOutside;
