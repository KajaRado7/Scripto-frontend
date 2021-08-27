<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <b-card class="mt-2 mx-auto card1" style="border-radius: 20px;">
        <b-card-text class="mt-2">
          <p class="note">
            *
            <b>Studies</b>
            : Graduate , Undergraduate
          </p>
          <p class="note">
            *
            <b>Rating (★)</b>
            : 1 - 5
          </p>
          <p class="note">
            *
            <b>Universities</b>
            : Juraj Dobrila University of Pula, University of Rijeka, University
            of Dubrovnik, University of Split, University of Osijek, University
            of Zadar, University of Zagreb
          </p>
        </b-card-text>
      </b-card>

      <div class="container1">
        <input
          v-model="store.searchTerm"
          type="text"
          name="search"
          class="form-control"
          id="search"
          placeholder="Search script"
        />
      </div>
      <div class="container2 mx-auto">
        <b-card-group deck style="margin: 0;cursor:pointer;">
          <div
            @click="gotoDetails(script)"
            v-for="script in scripts"
            :key="script.id"
          >
            <script-card :info="script" />
          </div>
        </b-card-group>
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import _ from 'lodash';
import ScriptCard from '@/components/ScriptCard.vue';
import store from '@/store';
import { Scripts } from '@/services/index.js';

export default {
  name: 'Scripts',
  components: {
    ScriptCard,
  },
  data() {
    return {
      store,
      scripts: [],
    };
  },
  watch: {
    'store.searchTerm': _.debounce(function(val) {
      this.fetchScripts(val);
    }, 500),
  },
  created() {
    this.fetchScripts();
  },
  methods: {
    async fetchScripts(term) {
      term = term || store.searchTerm;
      this.scripts = await Scripts.getAll(term);
    },
    gotoDetails(script) {
      this.$router.push({ path: `scripts/${script.id}` });
    },
  },
};
</script>

<style scoped>
.card1 {
  margin-bottom: 27px;
  text-align: justify;
  background-color: rgb(218, 216, 216);
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.287),
    0 6px 20px 0 rgba(95, 95, 95, 0.075), 0 6px 20px 0 rgba(95, 95, 95, 0.075);
}
.note {
  color: #8763b5;
}

.form-control {
  width: 100%;
  margin: auto;
  background: transparent;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  border-radius: 39px;
  height: 70px;
  padding: 8px 20px;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.287),
    0 6px 20px 0 rgba(95, 95, 95, 0.075), 0 6px 20px 0 rgba(95, 95, 95, 0.075);
}
.mainContent {
  margin-top: 250px;
}
#footer {
  width: 100%;
  height: 80px;
}
</style>
