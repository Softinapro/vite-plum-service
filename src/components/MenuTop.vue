<template>
  <div class="p-grid">
      <div class="p-col-10 p-sm-10 p-md-10">
        <router-link to="/">
          <img
            alt="logo"
            src="/src/assets/logo.png"
            height="30"
            class="p-mr-2"
          />
        </router-link>
        <router-link to="/cable_main" class="text-decoration-none">
          <Button label="Тест Кабеля" class="p-button-raised p-button-rounded p-mr-2" />
        </router-link>
        <router-link to="/cable_small" class="text-decoration-none">
          <Button label="Мини Тест" class="p-button-raised p-button-rounded" />
        </router-link>
      </div>

      
      <div class="p-col-2 p-sm-2 p-md-2 p-d-flex">
        <div class="p-ml-auto">
          <MenuTopMore />
        </div>
      </div>
    </div>
</template>

<script>

import MenuTopMore from "./MenuTopMore.vue";
export default {
  name: "MenuTop",
  components: {    
    MenuTopMore,
  },
};
</script>
