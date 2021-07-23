<template>
  <div>
    <div class="layout-menu-top"> 
      <!-- Toast добавляем здесь (главный компонент), он доступен из всех других компонентов
      без дополнительного добавляения в шаблоне  -->
      <Toast />     
      <MenuTop />
    </div>

    <div class="layout-views">
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuTop from './components/MenuTop.vue'

export default {
  components: {
    MenuTop,
  },
  setup() {
    
  },
};
</script>