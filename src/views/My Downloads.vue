<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <div class="containerCard"></div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainContent {
  margin-top: 250px;
  margin-left: 100px;
}
hr {
  border: 1px solid;
  border-color: #8763b5;
}
.containerCard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
</style>
