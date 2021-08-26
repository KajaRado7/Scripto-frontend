<template>
  <div class="cardGroup">
    <b-card-group deck style="margin: 0;margin:20px;">
      <b-card class="mt-2 mx-auto card">
        <img :src="info.script_picture" />
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
.card {
  text-align: center;
  background-color: #a082c8;
}
p {
  font-size: 18px;
  margin-top: 15%;
  color: white;
}
</style>
