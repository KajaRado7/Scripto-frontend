<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8" style="text-align:justify;">
      <br />
      <br />
      <div class="buttonContainer1">
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Juraj Dobrila University of Pula</h4>
          </button>
        </div>
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Rijeka</h4>
          </button>
        </div>
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Dubrovnik</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer2">
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Split</h4>
          </button>
        </div>
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Osijek</h4>
          </button>
        </div>
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Zadar</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer3">
        <div class="item3">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">University of Zagreb</h4>
          </button>
        </div>
      </div>
    </div>

    <div class="col-2"></div>
  </div>
</template>

<style scoped>
.item1 {
  order: 3;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item2 {
  order: 3;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item3 {
  order: 1;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}

.buttonContainer1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.buttonContainer2 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.buttonContainer3 {
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
