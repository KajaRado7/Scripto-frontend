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
      </div>
      <!--komentar i gumbic-->
      <h2 class="scriptComments">Comments:</h2>
      <div class="container6">
        <div class="item6">
          <form @submit.prevent="add_comment">
            <b-card
              class=" mx-auto"
              style="background-color:transparent;border: none !important;"
            >
              <transition-group tag="div" name="fade">
                <div
                  class="list-group-item list-group-item-action flex-column comment_section "
                  v-for="comments in comments"
                  :key="comments.comment"
                >
                  {{ comments.comment }}
                  <br />
                  by
                  <b style="color:#8763b5">
                    {{ comments.username }}
                  </b>
                  <a v-if="auth.username == comments.username">
                    <a
                      class="close"
                      @click.prevent="del_com(comments.comment)"
                    />
                  </a>
                </div>
              </transition-group>
              <input
                v-model="comment"
                type="text"
                class="form-control"
                placeholder="e.g. Thanks for the script!"
              />
              <button type="submit" class="btn btnSSU2  comm">
                <b>Comment</b>
              </button>
            </b-card>
          </form>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>
<script>
import ScriptCard from '@/components/ScriptCard.vue';
import { Scripts, Comments, Auth, Service } from '@/services/index.js';

export default {
  props: ['id'],
  name: 'Script',
  components: {
    ScriptCard,
  },
  data() {
    return {
      script: null,
      auth: Auth.state,
      error: '',
      comments: [],
      comment: '',
    };
  },
  created() {
    this.callCom();
  },
  async mounted() {
    // dohvati sve podatke o jednoj skripti
    this.script = await Scripts.getOne(this.id);
  },
  methods: {
    async callCom() {
      this.comments = await Comments.getAll(this.id);
    },
    // objava komentara
    async add_comment(e) {
      let comm = {
        comment: this.comment,
        script_id: this.script.id,
        username: this.auth.username,
      };
      if (this.comment == '') {
        this.error = 'Input field is empty!';
        e.preventDefault();
      } else {
        let s_list = await Comments.add(comm);
        console.log('Saved comment: ', s_list.data);
        this.callCom();
        this.comment = '';
      }
    },
    // brisanje komentara
    del_com(comment_name) {
      let comments = {
        comment_name: comment_name,
      };
      Service.post('/comments/delete/' + comment_name, comments).then(
        (result) => {
          console.log('Comment ', result, ' has been deleted!');
          this.callCom();
        }
      );
    },
  },
};
</script>
<style scoped>
.comment_section {
  margin-bottom: 5px;
  border-radius: 39px;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.287),
    0 6px 20px 0 rgba(95, 95, 95, 0.075), 0 6px 20px 0 rgba(95, 95, 95, 0.075);
}
.form-control {
  border-radius: 0%;
  margin-top: 20px;
  background: transparent;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  height: 70px;
  padding: 8px 20px;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.287),
    0 6px 20px 0 rgba(95, 95, 95, 0.075), 0 6px 20px 0 rgba(95, 95, 95, 0.075);
}
.add {
  max-width: 450px;
  width: 350px;
  background-color: #8763b5;
  border: none;
  color: white;
  text-align: center;
  height: 35px;
  border-radius: 4px;
}
.del {
  max-width: 450px;
  width: 350px;
  background-color: #7d7d7d;
  border: none;
  color: white;
  text-align: center;
  height: 35px;
  border-radius: 4px;
}
.close {
  position: absolute;
  right: 32px;
  top: 23px;
  width: 20px;
  height: 20px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 23px;
  width: 2px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.error {
  color: red;
  margin-top: 20px;
}
.message {
  color: #8763b5;
  margin-top: 20px;
}
.btnSSU2 {
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.459));
  width: 100%;
  height: 70px;
  table-layout: fixed;
  border-collapse: collapse;
}
.btnSSU1 {
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.459));
  width: 100%;
  height: 70px;
  table-layout: fixed;
  border-collapse: collapse;
}
.btnText {
  margin: 13px;
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
}

#footer {
  width: 100%;
  height: 80px;
}
</style>
