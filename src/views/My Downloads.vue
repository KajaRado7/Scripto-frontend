<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <div class="container2 mx-auto">
        HI
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import ScriptCard from '@/components/ScriptCard.vue';
import { Download, Service, Auth } from '@/services/index.js';

export default {
  data() {
    return {};
  },
  components: {
    ScriptCard,
  },
  methods: {},
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 80px;
}
.mainContent {
  margin-top: 250px;
}
</style>
