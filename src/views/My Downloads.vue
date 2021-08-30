<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <div class="container2 mx-auto">
        <form>
          <div class=" max-width: 900px; mt-4 mb-3">
            <b-card
              class="mx-auto text-left"
              style="width: 900px; -webkit-box-shadow:none; -moz-box-shadow:none; box-shadow:none; padding:0;"
            >
              <transition-group tag="div" name="fade" class="lista">
                <div v-for="list in list" :key="list.script_name">
                  <img
                    v-bind:src="list.script_picture"
                    style="width:140px; height:180px;"
                  />
                  <label>
                    <p class="text-left ml-3">{{ list.script_name }}</p>
                  </label>
                  <a
                    @click.prevent="delete_d_list(list.script_name)"
                    class="close"
                  />

                  <hr style="background-color:#c2c2c2" />
                </div>
              </transition-group>
            </b-card>
          </div>
        </form>
        <!--<b-card-group deck style="margin: 0;cursor:pointer;">
          <div
            @click="gotoDetails(script)"
            v-for="script in scripts"
            :key="script.id"
          >
            <script-card :info="script" />
          </div>
        </b-card-group>-->
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import ScriptCard from '@/components/ScriptCard.vue';
import { Scripts, Download, Service, Auth } from '@/services/index.js';

export default {
  data() {
    return {
      list: [],
      auth: Auth.state,
    };
  },
  components: {
    ScriptCard,
  },
  created() {
    this.callList();
  },
  methods: {
    async callList() {
      this.list = await Download.getAll(this.auth.username);
    },
    delete_d_list(script_name) {
      let d_list = {
        script_name: script_name,
      };
      Service.post('/my_downloads/delete/' + script_name, d_list).then(
        (result) => {
          console.log('Script was removed from your collection: ', result);
          this.callList();
        }
      );
    },
  },
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 80px;
}
.mainContent {
  margin-top: 250px;
}

.close {
  position: relative;
  right: 32px;
  top: 70px;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 50px;
  width: 3px;
}
.close:before {
  transform: rotate(45deg);
  background-color: black;
}
.close:after {
  transform: rotate(-45deg);
  background-color: black;
}
.close:hover:after {
  background-color: #8763b5;
}
.close:hover:before {
  background-color: #8763b5;
}
.fadesample {
  animation-name: fadeIn;
  animation-duration: 1s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
