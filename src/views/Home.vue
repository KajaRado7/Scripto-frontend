<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <h3>
        Welcome to
        <b style="color:#8763b5">Scripto</b>
        ! This app allows students to collaborate in terms of sharing scripts.
        If you want to publish your script or are just searching for one,
        everything is at your fingertips!
        <br />
        <br />
        In terms of finding the required script, you have many options:
        categorization by field, study and university, search by name or
        creator, and even ranking depending on the number of downloads or the
        highest grade.
        <br />
        <br />
        If you are the creator of the best script ever, simply click on the
        <b style="color:#16c937">green plus</b>
        button in the upper left corner of the page and……Voila!
      </h3>
      <!--testing b-card deck-->
      <b-card-group deck>
        <b-card
          title="Card Title"
          img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 25rem;"
          class="mb-2"
        ></b-card>
      </b-card-group>
      <!--testing b-card deck-->
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import ScriptCard from '@/components/ScriptCard.vue';

export default {};
</script>

<style scoped>
h3 {
  text-align: justify;
  margin-bottom: 60px;
}
.mainContent {
  margin-top: 250px;
  margin-left: 100px;
}
</style>
