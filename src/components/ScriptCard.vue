<template>
  <div>
    <b-card-group deck style="margin: 0;">
      <b-card class="mt-2 mx-auto"></b-card>
      <img :src="info.script_picture" />
      <b-card-text class="mt-2">
        <p>{{ info.script_name }}</p>
      </b-card-text>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'ScriptCard',
};
</script>

<style scoped></style>
