<template>
  <div class="p-grid">
      <div class="p-col-6 p-sm-4 p-md-3">
        <router-link to="/">
          <img
            alt="logo"
            src="/src/assets/logo.png"
            height="30"
            class="p-mr-2"
          />
        </router-link>
        <router-link to="/act" class="text-decoration-none">
          <Button label="А" class="p-button-raised p-button-rounded p-mr-2" />
        </router-link>
        <router-link to="/sticker" class="text-decoration-none">
          <Button label="Н" class="p-button-raised p-button-rounded" />
        </router-link>
      </div>

      <div class="p-col-3 p-sm-4 p-md-6">
        <MenuTopFile />
      </div>

      <div class="p-col-3 p-sm-4 p-md-3 p-d-flex">
        <div class="p-ml-auto">
          <MenuTopMore />
        </div>
      </div>
    </div>
</template>

<script>
import MenuTopFile from "./MenuTopFile.vue";
import MenuTopMore from "./MenuTopMore.vue";
export default {
  name: "MenuTop",
  components: {
    MenuTopFile,
    MenuTopMore,
  },
};
</script>
