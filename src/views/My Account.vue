<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;max-width: 500px;">
      <div id="myAccount">
        <label>Username</label>
        <p>
          <b>{{ auth.username }}</b>
        </p>
        <hr />
        <label>E-mail</label>
        <p><b></b></p>
        <hr />
        <label>Password</label>
        <p>
          <b></b>
        </p>
        <hr />
        <br />
        <div class="col-lg-12 col-md-12 text-center">
          <!--pozivamo funk. za logout-->
          <button @click="logout()" class="btn btn-lg btnSSU">
            <h4 class="btnText">Logout</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { Auth } from '@/services';

export default {
  data() {
    return {
      // pozivanje podataka
      auth: Auth.state,
    };
  },
  methods: {
    logout() {
      Auth.logout();
      // refresh trenutne stranice
      this.$router.go();
    },
  },
};
</script>

<style scoped>
p {
  color: #8763b5;
}
.mainContent {
  margin: 0;
  position: absolute;
  top: 34%;
  left: 50%;
  margin-top: 20px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
label {
  font-size: 23px;
  padding-bottom: 10px;
}
hr {
  border: 1px solid;
  border-color: #8763b5;
}
.btnSSU {
  padding: 10px 70px;
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.btnText {
  margin: 13px;
}
</style>
