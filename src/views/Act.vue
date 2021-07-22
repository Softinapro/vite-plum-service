<template>
  <div>
    <!-- переносим текст заголовка - при вводе/выводе наименования получателя
     он может превысить ширину экрана устройства -->
    <h3 style="word-break: break-all">
      {{ ActFile.actFile.actContent.actRecipientInfo.actRecipientName }}
    </h3>
    <div v-if="1">
      <label for="actRecipientName">actRecipientName</label>
      <Textarea
        id="actRecipientName"
        v-model="ActFile.actFile.actContent.actRecipientInfo.actRecipientName"
        :autoResize="true"
        rows="1"
        class="textarea-width-100"
      />
      <hr />
    </div>
  </div>
</template>

<script>
// import {
//   actFile,
//   actSave,
//   actSaveLocalStorage,
// } from "../assets/modules/act_4.0.js";


import ActFile from '../components/ActFile.vue';


import { watch } from "vue";

export default {
  name: "Act",
  components: {},
  setup() {
    // watch(
    //   () => actFile,
    //   (actFile) => {        
    //     actSaveLocalStorage();
    //   },
    //   // deep: true включает отслеживание изменения свойств в глубоко вложенном объекте или массиве
    //   { deep: true }
    // );

    return { ActFile };
  },
};
</script>