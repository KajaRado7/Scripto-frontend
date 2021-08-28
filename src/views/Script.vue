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
          <form @submit.prevent="add_download()">
            <button type="submit" class="btn  btnSSU">
              <h4 class="btnText">Download</h4>
            </button>
          </form>
          <p class="message">{{ message }}</p>
          <p class="error">{{ error }}</p>
        </div>
      </div>
      <!--komentar i gumbic-->
      <h2 class="scriptComments">Comments:</h2>
      <div class="container6">
        <div class="item6" v-if="showComments">
          <div class="comments list-group">
            <!--cini mi se da ju tu negdje greska(v-if/:key----->
            )
            <a
              :key="comm.comments"
              v-for="comm in info.comments"
              href="#"
              class="animate list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <small>{{ comm.username }}</small>
                <a @click="removeComment(comm.id)" href="#">Delete</a>
              </div>
              <small>{{ comm.comment }}</small>
            </a>
          </div>

          <form @submit.prevent="postComment()" class="form-inline mb-5">
            <div class="form-group">
              <input
                v-model="newComment"
                type="text"
                class="form-control"
                id="imageUrl"
                placeholder="Any comment?"
              />
            </div>
            <button type="submit" class="btn btn-primary ml-2">Post</button>
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
import { Scripts, Download, Auth } from '@/services/index.js';

export default {
  props: ['id', 'info', 'showComments'],
  name: 'Script',
  components: {
    ScriptCard,
  },
  data() {
    return {
      script: null,
      auth: Auth.state,
      newComment: '',
      message: '',
      error: '',
      list: [],
    };
  },
  created() {
    this.callList();
  },
  async mounted() {
    // dohvati sve podatke o jednoj skripti
    this.script = await Scripts.getOne(this.id);
  },
  methods: {
    async callList() {
      try {
        this.list = await Download.getOne(this.id);
      } catch (e) {
        console.log(e);
      }
    },
    async add_download() {
      let d_list = {
        script_id: this.script_id,
        script_picture: this.script.script_picture,
        script_name: this.script.script_name,
        username: this.auth.username,
      };
      if (this.list.script_name == this.script.script_name) {
        this.error = 'Script has already been added!';
      } else {
        // ako je sve proslo uspjesno:
        let s_list = await Download.add(d_list);
        console.log('Downloaded script: ', s_list.data);
        this.message = 'Script has been added to your downloads!';
      }
    },
    async refresh() {
      let script = await Scripts.getOne(this.info.id);
      this.info.comments = script.comments;
    },
    async removeComment(commentId) {
      let scriptId = this.info.id;
      await Scripts.Comments.delete(scriptId, commentId);
      this.refresh();
    },
    async postComment() {
      if (this.newComment) {
        let scriptId = this.info.id;
        let comment = {
          username: this.auth.username,
          comment: this.newComment,
        };
        try {
          await Scripts.Comments.add(scriptId, comment);
          this.refresh();
        } catch (e) {
          console.error('Error while trying to save the comment: ', e);
        } finally {
          this.newComment = '';
        }
      }
    },
  },
};
</script>
<style scoped>
.message {
  color: #8763b5;
}
.btnSSU {
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
