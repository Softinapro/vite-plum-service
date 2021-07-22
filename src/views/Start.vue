<template>
  <div>
    <!-- <Toast /> -->
    <Toast position="top-left" group="tl" />
    <Toast position="bottom-left" group="bl" />
    <Toast position="bottom-right" group="br" />

    <div class="card">
      <h5>Severities</h5>
      <Button label="Success" class="p-button-success" @click="showSuccess" />
      <Button label="Info" class="p-button-info" @click="showInfo" />
      <Button label="Warn" class="p-button-warning" @click="showWarn" />
      <Button label="Error" class="p-button-danger" @click="showError" />

      <h5>Positions</h5>
      <Button label="Top Left" class="p-mr-2" @click="showTopLeft" />
      <Button
        label="Bottom Left"
        class="p-button-warning"
        @click="showBottomLeft"
      />
      <Button
        label="Bottom Right"
        class="p-button-success"
        @click="showBottomRight"
      />

      <h5>Options</h5>
      <Button @click="showMultiple" label="Multiple" class="p-button-warning" />
      <Button @click="showSticky" label="Sticky" />

      <h5>Remove All</h5>
      <Button @click="clear" label="Clear" />
    </div>    
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";

export default {
  setup() {
    const toast = useToast();

    const showSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    };
    const showInfo = () => {
      toast.add({
        severity: "info",
        summary: "Info Message",
        detail: "Message Content",
        life: 3000,
      });
    };
    const showWarn = () => {
      toast.add({
        severity: "warn",
        summary: "Warn Message",
        detail: "Message Content",
        life: 3000,
      });
    };
    const showError = () => {
      toast.add({
        severity: "error",
        summary: "Error Message",
        detail: "Message Content",
        life: 3000,
      });
    };
    const showTopLeft = () => {
      toast.add({
        severity: "info",
        summary: "Info Message",
        detail: "Message Content",
        group: "tl",
        life: 3000,
      });
    };
    const showBottomLeft = () => {
      toast.add({
        severity: "warn",
        summary: "Warn Message",
        detail: "Message Content",
        group: "bl",
        life: 3000,
      });
    };
    const showBottomRight = () => {
      toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        group: "br",
        life: 3000,
      });
    };
    const showSticky = () => {
      toast.add({
        severity: "info",
        summary: "Sticky Message",
        detail: "Message Content",
      });
    };
    const showMultiple = () => {
      toast.add({
        severity: "info",
        summary: "Message 1",
        detail: "Message 1 Content",
        life: 3000,
      });
      toast.add({
        severity: "info",
        summary: "Message 2",
        detail: "Message 2 Content",
        life: 3000,
      });
      toast.add({
        severity: "info",
        summary: "Message 3",
        detail: "Message 3 Content",
        life: 3000,
      });
    };
    const clear = () => {
      toast.removeAllGroups();
    };

    return {
      showSuccess,
      showInfo,
      showWarn,
      showError,
      showTopLeft,
      showBottomLeft,
      showBottomRight,
      showSticky,
      showMultiple,
      clear,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  min-width: 10rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
  button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>