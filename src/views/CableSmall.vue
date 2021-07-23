<template>
  <div>
    <h4>Материал жилы = {{ wireMaterial }}</h4>
    <h5>
      Удельное сопротивление проводника = {{ resistivity }} ом х кв.мм / м
    </h5>
    <Slider v-model="resistivity" :step="0.0001" :min="0.015" :max="0.03" />
    <hr />
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "CableSmall",
  setup() {
    const resistivity = ref(0.0176);
    const wireMaterial = computed(() => useSpotWireMaterial(resistivity.value));
    return { resistivity, wireMaterial };
  },
};

function useSpotWireMaterial(resistivity) {
  let wireMaterial = '***';
  
  if(resistivity >= 0.0172 && resistivity <= 0.018){
    wireMaterial = 'Медь';
  }
  return wireMaterial;
}
</script>