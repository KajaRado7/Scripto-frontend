<template>
  <div class="cardGroup">
    <b-card-group deck style="margin: 0;margin:20px;">
      <b-card class="mt-2 mx-auto card" style="border-radius: 20px;">
        <img class="image" :src="info.script_picture" />
        <b-card-text class="mt-2">
          <p>
            <b>{{ info.script_name }}</b>
          </p>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'ScriptCard',
};
</script>

<style scoped>
.image {
  width: 250px;
  height: 210px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.602),
    0 6px 20px 0 rgba(0, 0, 0, 0.205);
}
.card {
  text-align: center;
  background-color: #a082c8;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.602),
    0 6px 20px 0 rgba(0, 0, 0, 0.137);
}
p {
  font-size: 18px;
  margin-top: 15%;
  color: white;
}
</style>
