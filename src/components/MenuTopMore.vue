<template>
  <div>    
    <Button
      type="button"
      icon= "fas fa-ellipsis-v" 
      
      class="p-button-raised p-button-rounded p-mr-2"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {     
    const menu = ref();
    const items = ref([
      {   
        label: "Ещё...", 
        items: [
          {
            separator: true,
          },
          {
            label: "Тема",
            icon: "fas fa-cloud-sun",
            visible: true,
            command: () => {              
            },
          },
          {
            separator: true,
          },
          {
            label: "О Приложении",
            icon: "fas fa-info-circle",
            command: () => {
              
            },
          },
          {
            separator: true,
          },
          {
            label: "Справка",
            icon: "fas fa-question-circle",
            command: () => {
              
            },
          },          
        ],
      },      
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };
    const save = () => {
     
    };   

    return { items, menu, toggle, save };
  },
};
</script>