<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <img
        src="@/assets/logo2.png"
        width="550"
        class="d-inline-block logo2"
        loading="lazy"
      />

      <div class="inputContainer1">
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

      <div class="inputContainer2">
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
      <div class="text-center">
        <button type="button" class="btn btn-lg btnLogin">
          <h4 class="btnText">Login</h4>
        </button>
      </div>
      <span class="signupRoute text-center ">
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
    <div class="col-2"></div>
  </div>
</template>
<style scoped>
.btnLogin {
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
.item {
  order: 1;
  flex-grow: 1;
  width: 100%;
  margin: 5px;
}
.form-control {
  background: transparent;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  border-radius: 39px;
  height: 70px;
  padding: 8px 20px;
}

.inputContainer1 {
  max-width: 500px;
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.inputContainer2 {
  max-width: 500px;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
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
