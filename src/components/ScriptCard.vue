<template>
  <div>
    <b-card-group deck>
      <b-card
        :id="info.script_name"
        :src="info.script_picture"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 card"
      ></b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ['info'],
};
</script>

<style scoped></style>
