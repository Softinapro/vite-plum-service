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
//import { actFile } from './assets/modules/act_4.0.js'
import ActFile from './components/ActFile.vue';
import Sticker from './assets/modules/sticker_4.0.js'
import axios from 'axios'

export default {
  components: {
    MenuTop,
  },
  setup() {


    axios
      .post('./config/config.json')
      .then(function (response) {
        // actFile.actContent.actRecipientInfo = response.data.actRecipientInfo;
        ActFile.actFile.actContent.actRecipientInfo = response.data.actRecipientInfo;
        Sticker.stRecipient = response.data.stRecipient;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>