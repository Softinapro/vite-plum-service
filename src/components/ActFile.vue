<template>
  <div>

  </div>
</template>
<script>
import { reactive } from "vue";

const actFile = reactive({
  actCheckSumServer: null,
  actCheckSumClient: null,

  actContent: {
    actFileInfo: {
      actFileVersion: "40",
      actProgramCreator: "PlumService_4.0",
      actServerDomain: null,
      actPrivateType: false,
      actAgreementVersion: null,
      actAgreementControl: null,
      actAgreementActive: false,
      actAgreementValid: false,
      actRegCode: null,
      actRegDate: null,
      actRegSenderIP: null,
      actRegSenderBrowser: null,
    },

    actRecipientInfo: {
      actRecipientName: "СЦ ***",
      actRecipientINN: "",
      actRecipientAddress: "",
      actRecipientContacts: "",
    },

    actSenderInfo: {
      actSenderLegalStatus: "",
      actSenderName: {
        company: "",
        person: {
          surname: "",
          name: "",
          patronymic: "",
        },
      },
      actSenderINN: "",
      actSenderAddress: {
        fromWhom: "",
        fromWhere: "",
        postcode: "",
      },

      actSenderContacts: {
        phones: {
          phone_1: "",
          phone_2: "",
          phone_3: "",
        },
        mail: {
          mail_1: "",
          mail_2: "",
        },
        person: {
          surname: "",
          name: "",
          patronymic: "",
          official_position: "",
        },
      },

      actReturnAddress: {
        useOptionReturnAddress: false,
        matchesTheAddressSender: false,
        postcode: "",
        toWhom: "",
        whereTo: "",
        contact: "",
      },

      actReturnDevicesMethod: {
        useOptionReturnDevicesMethod: false,
        method: "",
      },
    },

    actDevicesInfo: [],
  },
});

export default {
  setup() {
    watch(
      () => actFile,
      (actFile) => {
        actSaveLocalStorage();
      },
      // deep: true включает отслеживание изменения свойств в глубоко вложенном объекте или массиве
      { deep: true }
    );
    return { actFile, actSave };
  },
  methods: {
    actSave() {
      let locAct = JSON.stringify(actFile);
      let blob = new Blob([locAct], {
        type: "application/json",
      });
      let link = document.createElement("a");
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute(
        "download",
        "pL_" +
          actRecipientNameFormat() +
          "_" +
          actCustomerDate() +
          ".plumservice_" +
          actFile.actContent.actFileInfo.actFileVersion
      );
      link.click();
    },

    actRecipientNameFormat() {
      let recipientName = actFile.actContent.actRecipientInfo.actRecipientName;
      recipientName = recipientName.replace(/[\s]/gi, "_");
      recipientName = recipientName.replace(/[^a-zа-яё0-9.]_/gi, "");
      recipientName = recipientName.substring(0, 25);
      return recipientName;
    },

    actSaveLocalStorage() {
      console.log("в хранилище");
    },

    actCustomerDate() {
      let clientDate = new Date();
      let clientDateReturn =
        clientDate.getFullYear() +
        "-" +
        (clientDate.getMonth() + 1) +
        "-" +
        clientDate.getDate() +
        "_" +
        clientDate.getHours() +
        "-" +
        clientDate.getMinutes() +
        "-" +
        clientDate.getSeconds();
      return clientDateReturn;
    },
  },
};
</script>