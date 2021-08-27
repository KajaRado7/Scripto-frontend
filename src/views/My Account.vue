<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;max-width: 500px;">
      <div id="myAccount">
        <div class="container">
          <!--input fields trebaju ici ovdje-->
          <form novalidate @submit.prevent="changeUserPassword">
            <div class="item">
              <label>Old Password</label>
              <br />
              <input
                v-model="old_password"
                type="password"
                name="old_password"
                class="form-control"
                id="old_password"
                required
                invalidFeedback="Please enter your correct old password"
              />
              <p class="error">{{ error }}</p>

              <label>New Password</label>
              <br />
              <input
                v-model="new_password"
                type="password"
                name="new_password"
                class="form-control"
                id="new_password"
                required
                invalidFeedback="Please enter the correct password"
              />
              <p class="error1">{{ error1 }}</p>
              <p class="error2">{{ error2 }}</p>
              <p class="error3">{{ error3 }}</p>
              <div class="alert" v-if="!$v.new_password.minLength">
                Password must have
                {{ $v.new_password.$params.minLength.min }} characters!
              </div>

              <div class="col-lg-12 col-md-12 text-center">
                <!--pozivamo funk. za izmjenu lozinke-->
                <button type="submit" class="btn btn-lg btnSSU">
                  <h4 class="btnText">Change Password</h4>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { Auth } from '@/services';
import { required, minLength } from 'vuelidate/lib/validators'; // Vuelidate validators

export default {
  data() {
    return {
      old_password: '',
      new_password: '',
      error: '',
      error1: '',
      error2: '',
      error3: '',
      error4: '',
    };
  }, // definiranje pravila potrebnih za kreiranje nove lozinke
  validations: {
    new_password: {
      required,
      minLength: minLength(7),
    },
  },

  methods: {
    // funk. za promijenu lozinke
    async changeUserPassword() {
      // moguće greške
      if (this.old_password == '' || this.new_password == '') {
        return (this.error1 = 'Please fill in all the input fields!');
      } else if (this.old_password == this.new_password) {
        return (this.error2 = 'Passwords must differ from each other!');
      }
      if (!this.$v.new_password.minLength) {
        return (this.error4 = 'Password is invalid!');
      }
      // ako je sve prošlo uspješno:
      try {
        let success = await Auth.changePassword(
          this.old_password,
          this.new_password
        );
        console.log('Result of changes: ', success);
        if (success) {
          this.$router.push({ path: '/login' });
        }
      } catch (e) {
        console.log(e);
        this.error = 'You typed in wrong old password!';
      }
    },
  },
};
</script>

<style scoped>
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
.alert {
  margin-top: -23px;
}
.error,
.error1,
.error2,
.error3 {
  margin-top: 10px;
}

.error,
.error1,
.error2,
.error3,
.alert {
  color: red;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.item {
  order: 1;
  flex-grow: 1;
  width: 100%;
  margin: 2rem;
}

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
  margin-bottom: 15px;
  font-size: 23px;
  padding-bottom: 10px;
}
hr {
  border: 1px solid;
  border-color: #8763b5;
}
.btnSSU {
  margin: 20px;
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.459));
}
.btnText {
  margin: 17px;
}
</style>
