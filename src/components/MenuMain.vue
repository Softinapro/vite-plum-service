<template>
  <div class="z-index-menubar">
    <Menubar :model="items">
      <template #start>
        <router-link to="/">
          <img
            alt="logo"
            src="/src/assets/logo.png"
            height="25"
            class="p-mr-4"
          />
        </router-link>
        <router-link to="/act">
          <Button label="А" class="p-button-raised p-button-rounded" style="text-decoration: none" />
        </router-link>
        <router-link to="/sticker">
          <Button label="Н" class="p-button-raised p-button-rounded" />
        </router-link>
      </template>

      <template #end>
        <img alt="logo" src="/src/assets/logo.png" height="25" class="p-mr-4" />
      </template>
    </Menubar>
  </div>
</template>

<script>
// нативно primevue использует свои иконки, которые можно подставлять в том числе в меню.
// здесь это выглядит примерно так icon:'pi pi-fw pi-align-left'
// нативные иконки весьма не интересные.
// в браузере заметил, что эти иконки оборачиваются в тег <i>, как в awesom.
// оказалось, что если нечто вроде 'pi pi-fw pi-align-left' заменить на типа 'fas fa-coffee', то это сработает, ЕСЛИ
// при подключении awesom к проекту вызвать для него dom.watch() - чтобы для awesom начала работать конструкция типа
// <i class="fas fa-coffee"></i> (будет работать без подключения компонента),
// конструкция типа <font-awesome-icon icon="coffee" /> работает по умолчанию, но при этом
// нужно подключать компонент app.component('font-awesome-icon', FontAwesomeIcon)

import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      
      {
        label: "Файл",
        icon: "fas fa-file-signature",
        items: [
          {
            label: "Сохранить",
            icon: "fas fa-save",
          },
          {
            separator: true,
          },
          {
            label: "Открыть",
            icon: "fas fa-download",
          },
          {
            separator: true,
          },
          {
            label: "Печать",
            icon: "fas fa-print",
          },
          {
            separator: true,
          },
          {
            label: "Регистрация",
            icon: "fas fa-registered",
          },
        ],
      },

      {
        label: "Ещё",
        icon: "fas fa-cog",
        items: [
          {
            label: "Тема",
            icon: "fas fa-cloud-sun",
          },
          {
            separator: true,
          },
          {
            label: "О Приложении",
            icon: "fas fa-info-circle",
          },
          {
            separator: true,
          },
          {
            label: "Справка",
            icon: "fas fa-question-circle",
          },
        ],
      },
    ]);

    return { items };
  },
};
</script>

<style>
</style>