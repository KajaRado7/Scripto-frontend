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
      <form novalidate @submit.prevent="signup">
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
                name="username"
                class="form-control"
                id="username"
                placeholder="e.g. Ivan7x"
                required
                invalidFeedback="Please enter your username"
              />
            </div>
            <!--moguce greske-->
            <p class="error">{{ error1 }}</p>
            <div class="alert" v-if="!$v.username.containsUppercase">
              Username must have at least one upper case letter!
            </div>
          </div>

          <div class="inputContainer2">
            <div class="item">
              <label for="email">
                Email
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
                v-model="email"
                type="text"
                name="email"
                class="form-control"
                id="email"
                placeholder="e.g. horvat123@gmail.com"
                required
                invalidFeedback="Please enter your e-mail"
              />
            </div>
          </div>

          <div class="inputContainer3">
            <div class="item">
              <label for="pass">
                Password
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
                v-model="password"
                type="password"
                name="pass"
                class="form-control"
                id="pass"
                placeholder="Password"
                required
                invalidFeedback="Please enter your password"
              />
            </div>
            <!--moguce greske-->
            <p class="error">{{ error2 }}</p>
            <div class="alert" v-if="!$v.password.minLength">
              Password must have
              {{ $v.password.$params.minLength.min }} characters!
            </div>
          </div>
        </div>
        <div id="container2">
          <button type="submit" class="btn btn-lg btnSignup">
            <h4 class="btnText">Signup</h4>
          </button>
          <span class="loginRoute text-center ">
            <h5>
              Already have an account?
              <router-link to="/login">
                <a href="#">
                  Login
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
import { required, minLength } from 'vuelidate/lib/validators'; // Vuelidate validators

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error1: '',
      error2: '',
    };
  },
  // definiranje pravila potrebnih za registraciju
  validations: {
    username: {
      required,
      containsUppercase(a) {
        const upper_case = /[A-Z]/.test(a);
        return upper_case;
      },
    },
    password: {
      required,
      minLength: minLength(7),
    },
  },
  methods: {
    async signup(event) {
      if (this.username == '' || this.email == '' || this.password == '') {
        return event.target.classList.add('was-validated');
      }
      // provjera za username--------------------//
      if (!this.$v.username.containsUppercase) {
        return (this.error1 = 'Username is invalid!');
      }
      // provjera za pass------------------------//
      if (!this.$v.password.minLength) {
        return (this.error2 = 'Password is invalid!');
      }
      // spremanje podataka jer je registracija prošla uspješno
      try {
        let success = await Auth.signup(
          this.username,
          this.email,
          this.password
        );
        console.log('Result of registration: ', success);
        if (
          (success &&
            this.$v.password.minLength &&
            this.$v.username.containsUppercase) ||
          this.username !== '' ||
          this.email !== '' ||
          this.password !== ''
        ) {
          console.log('Success, you have registered to Scripto!:)');
          // preusmjeri korisnika na Login
          this.$router.push({ name: 'Login' });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: -23px;
}
.error {
  margin-top: 10px;
}

.alert,
.error {
  color: red;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnSignup {
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
  margin-bottom: 50px;
}
#container2 {
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -50%);
}
.inputContainer2,
.inputContainer3 {
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
