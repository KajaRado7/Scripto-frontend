<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <!--<div class="container2 mx-auto">
        <b-card-group deck style="margin: 0;cursor:pointer;">
          <div
            @click="gotoDetails(script)"
            v-for="script in scripts"
            :key="script.id"
          >
            <script-card :info="script" />
          </div>
        </b-card-group>
      </div>-->
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
}
</style>
