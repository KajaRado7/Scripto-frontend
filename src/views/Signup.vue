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
      <form @submit.prevent="signup">
        <div id="container1">
          <div class="inputContainer1">
            <div class="item">
              <label for="username">
                Username
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
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
              <label for="email">
                Email
                <span class="text-danger ml-1">*</span>
              </label>
              <br />
              <input
                type="text"
                maxlength="50"
                name="email"
                class="form-control"
                id="email"
                placeholder="e.g. horvat123@gmail.com"
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
                type="password"
                maxlength="50"
                name="pass"
                class="form-control"
                id="pass"
                placeholder="Password"
              />
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

<style scoped>
.btnSignup {
  margin-bottom: 30px;
  margin-top: 35px;
  padding: 10px 70px;
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
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
