<template>
  <div class="row">
    <div class="col-2"></div>
    <div v-if="script" class="col-8 mainContent" style="text-align:justify;">
      <!--slika-->
      <div class="container1">
        <div class="item1">
          <img :src="script.script_picture" class="card-img-top" />
        </div>
      </div>
      <br />
      <!--ime skripte-->
      <div class="container2">
        <div class="item2">
          <h2 class="scriptName">{{ script.script_name }}</h2>
        </div>
      </div>
      <!--field i study-->
      <div class="container3">
        <div class="item3">
          <h4>{{ script.field }}</h4>
          <hr />
        </div>
        <div class="item3">
          <h4>{{ script.study }}</h4>
          <hr />
        </div>
      </div>
      <!--university i rating-->
      <div class="container4">
        <div class="item4">
          <h4>{{ script.university }}</h4>
          <hr />
        </div>
        <div class="item4">
          <h4>
            Rating:
            {{ script.script_rating }}
          </h4>
          <hr />
        </div>
      </div>
      <!--note i preuzimanje-->
      <div class="container5">
        <div class="item5">
          <h4>{{ script.note }}</h4>
          <hr />
        </div>
        <div class="item55">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            />
          </svg>
        </div>
      </div>
      <!--komentar i gumbic-->
      <h2 class="scriptComments">Comments:</h2>
      <div class="container6">
        <div class="item6"></div>
        <div class="item6"></div>
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>
<script>
import ScriptCard from '@/components/ScriptCard.vue';
import { Scripts, myDownloads, Auth, Service } from '@/services/index.js';

export default {
  props: ['id'],
  name: 'Script',
  components: {
    ScriptCard,
  },
  data() {
    return {
      script: null,
    };
  },
  async mounted() {
    // dohvati sve podatke o jednoj skripti
    this.script = await Scripts.getOne(this.id);
  },
};
</script>
<style scoped>
.bi-download {
  color: #8763b5;
  margin-top: 10px;
}
.card-img-top {
  width: 700px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.602),
    0 6px 20px 0 rgba(0, 0, 0, 0.637);
}
h4 {
  text-align: center;
}
.scriptName {
  color: white;
  text-align: center;
}
.scriptComments {
  margin-top: 20px;
  color: #8763b5;
}
hr {
  border: 4;
  height: 3px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(109, 36, 158, 0.904),
    rgba(0, 0, 0, 0)
  );
}
.container1,
.container2,
.container3,
.container4,
.container5,
.container6 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

.item1,
.item2 {
  text-align: center;
  align-items: center;
  justify-content: center;
  order: 1;
  flex-grow: 1;
  width: 100%;
  margin: 1rem;
}
.item2 {
  padding: 15px;
  background-image: radial-gradient(
    #8763b5,
    #8763b5,
    #d1c1ed,
    transparent,
    transparent
  );
  border-radius: 20px;
}
.item3,
.item4,
.item5,
.item55,
.item6 {
  order: 1;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item55 {
  margin-top: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.mainContent {
  margin-top: 250px;
  margin-left: 100px;
}

#footer {
  width: 100%;
  height: 80px;
}
</style>
