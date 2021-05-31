<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <div class="containerCard">
        <router-link to="/script">
          <div class="card">
            <img class="card-img-top" src="@/assets/script1.jpg" />
            <div class="card-body">
              <p class="card-text" value="naslov">step by step - mat. zadaci</p>
              <br />
              <hr />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'My Downloads',
};
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
.card {
  order: 1;
  flex-grow: 1;
  width: 50%;
  margin: 1rem;
  margin-bottom: 25px;
  background-color: transparent;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: none;
}

.card-img-top {
  height: 50%;
  object-fit: cover;
  border-radius: 2em;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  margin-bottom: 20px;
}

.card-body {
  text-align: left;
  margin-top: -6%;
  margin-bottom: 7%;
}

.card-text {
  margin-left: -10px;
  margin-top: 15px;
  color: #2c3e50;
  position: fixed;
}
</style>
