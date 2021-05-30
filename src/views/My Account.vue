<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;max-width: 500px;">
      <br />
      <br />
      <div id="myAccount">
        <label>Full name</label>
        <p></p>
        <hr />
        <label>E-mail</label>
        <p></p>
        <hr />
        <label>Password</label>
        <p></p>
        <hr />

        <br />
        <div class="col-lg-12 col-md-12 text-center">
          <button type="button" class="btn btn-lg btnSSU">
            <h4 class="btnText">Logout</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<style scoped>
.mainContent {
  margin: 0;
  position: absolute;
  top: 34%;
  left: 50%;
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
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.btnText {
  margin: 13px;
}
</style>
