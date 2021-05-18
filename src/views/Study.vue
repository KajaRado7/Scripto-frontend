<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8" style="text-align:justify;">
      <br />
      <br />
      <div class="buttonContainer">
        <div class="item">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Graduate</h4>
          </button>
        </div>
        <div class="item">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Undergraduate</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<style scoped>
.item {
  order: 2;
  flex-grow: 1;
  width: 100%;
  margin: 1rem;
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.btnSSU {
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 90px;
  table-layout: fixed;
  border-collapse: collapse;
}
.btnText {
  margin: 13px;
}
</style>
