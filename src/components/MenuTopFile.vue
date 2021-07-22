<template>
  <div>
    <Button
      type="button"
      label="Файл"
      class="p-button-raised p-button-rounded p-mr-2"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <div v-if="$route.name === 'Act'">
      <Menu id="overlay_menu" ref="menu" :model="itemsAct" :popup="true" />
    </div>
    <div v-else-if="$route.name === 'Sticker'">
      <Menu id="overlay_menu" ref="menu" :model="itemsSticker" :popup="true" />
    </div>
    <div v-else>
      <Menu id="overlay_menu" ref="menu" :model="itemsStart" :popup="true" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import Act from "../assets/modules/act_4.0.js"
import sticker from "../assets/modules/sticker_4.0.js"

export default {
  setup() {
    const menu = ref();
    const itemsStart = ref([
      {
        label: "Выберите Акт или Наклейку",
        items: [
          {
            separator: true,
          },
          {
            label: "Акт Передачи",
            icon: "fas fa-file-signature",
            to: "/act",
          },
          {
            separator: true,
          },
          {
            label: "Наклейка Транспортная",
            icon: "fas fa-list-alt",
            to: "/sticker",
          },
        ],
      },
    ]);
    const itemsAct = ref([
      {
        label: "Акт Передачи Обор...",
        items: [
          {
            separator: true,
          },
          {
            label: "Акт Открыть",
            icon: "fas fa-file-download",
            visible: true,
            command: () => {
              console.log("Акт Открыть");
            },
          },
          {
            separator: true,
          },
          {
            label: "Акт Сохранить",
            icon: "fas fa-save",
            command: () => { 
              Act.actSave();
            },
          },
          {
            separator: true,
          },
          {
            label: "Акт Печать",
            icon: "fas fa-print",
            command: () => {},
          },
          {
            separator: true,
          },
          {
            label: "Акт Регистрация",
            icon: "fas fa-registered",
            command: () => {},
          },
        ],
      },
    ]);
    const itemsSticker = ref([
      {
        label: "Наклейка Трансп...",
        items: [
          {
            separator: true,
          },
          {
            label: "Накл. Открыть",
            icon: "fas fa-file-download",
            command: () => {
              console.log("это путь = " + app.$route);
            },
          },
          {
            separator: true,
          },
          {
            label: "Накл. Сохранить",
            icon: "fas fa-save",
            command: () => {},
          },
          {
            separator: true,
          },
          {
            label: "Накл. Печать",
            icon: "fas fa-print",
            command: () => {},
          },
        ],
      },
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };
    const save = () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Data Saved",
        life: 3000,
      });
    };

    return { itemsStart, itemsSticker, itemsAct, menu, toggle, save };
  },  
};
</script>