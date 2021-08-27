<template>
  <div class="row">
    <div class="col-5"></div>
    <div class="col-2 mainContent" style="text-align:justify;">
      <img
        src="@/assets/logo2.png"
        width="550"
        class="d-inline-block logo2"
        loading="lazy"
      />
      <form novalidate @submit.prevent="login">
        <div id="container1">
          <div class="inputContainer1">
            <div class="item">
              <label for="username">
                Username
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
                v-model="username"
                type="text"
                maxlength="50"
                name="username"
                class="form-control"
                id="username"
                placeholder="e.g. Ivan7x"
              />
            </div>
          </div>

          <div class="inputContainer2">
            <div class="item">
              <label for="pass">
                Password
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
                v-model="password"
                type="password"
                maxlength="50"
                name="pass"
                class="form-control"
                id="pass"
                placeholder="Password"
              />
              <!--moguce greske-->
              <p class="error">{{ error }}</p>
            </div>
          </div>
        </div>
        <div id="container2">
          <button type="submit" class="btn btn-lg btnLogin">
            <h4 class="btnText">Login</h4>
          </button>
          <span class="signupRoute text-center">
            <h5>
              New User?
              <router-link to="/signup">
                <a href="#">
                  Signup
                </a>
              </router-link>
            </h5>
          </span>
        </div>
      </form>
    </div>
    <div class="col-5"></div>
  </div>
</template>
<script>
import { Auth } from '@/services';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login(event) {
      if (this.username == '' || this.password == '') {
        event.target.classList.add('was-validated');
        return (this.error = 'Wrong username or password!');
      }
      this.error = '';
      try {
        // prijava je prošla uspješnp
        let success = await Auth.login(this.username, this.password);
        console.log('Result of login: ', success);
        if ((success && this.username !== '') || this.password !== '') {
          this.$router.replace({ path: '/' });
          // refresh trenutne stranice
          this.$router.go();
        }
      } catch (e) {
        this.error = 'Wrong username or password!';
      }
    },
  },
};
</script>

<style scoped>
.error {
  margin-top: 10px;
  color: red;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnLogin {
  margin-bottom: 30px;
  margin-top: 35px;
  padding: 10px 70px;
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.459));
}
.btnText {
  margin: 13px;
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
#container1 {
  margin-top: 90px;
}
#container2 {
  position: absolute;
  left: 50%;
  bottom: -83%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.inputContainer2 {
  margin-top: 1rem;
}
.logo2 {
  margin: 0;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.mainContent {
  margin-top: 250px;
}
</style>
