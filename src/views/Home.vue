<template>
  <div>
    <BounceLoader :loading="isLoading" :color="'#68d391'" :size="100" />
    <PxAssetsTable v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import { getAssets } from "@/api.js";
import PxAssetsTable from "@/components/PxAssetsTable.vue";

export default {
  name: "HomeView",
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;
    getAssets()
      .then((assets) => {
        this.assets = assets;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>
