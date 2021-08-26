<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
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
.container1 {
  margin-bottom: 30px;
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
}
.mainContent {
  margin-top: 260px;
  margin-left: 100px;
}
</style>
