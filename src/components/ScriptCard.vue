<template>
  <div class="cardGroup">
    <b-card-group deck style="margin: 0;margin:20px;">
      <b-card class="mt-2 mx-auto card" style="border-radius: 20px;">
        <div class="container">
          <img class="image" :src="info.script_picture" />
          <div class="overlay">
            <div class="text">
              Check me out!
            </div>
          </div>
        </div>
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
.container:hover .overlay {
  opacity: 1;
  border-radius: 20px;
}
.text {
  text-shadow: 2px 2px 4px #000000;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #d1c1ed;
}
.image {
  width: 225px;
  height: 185px;
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
