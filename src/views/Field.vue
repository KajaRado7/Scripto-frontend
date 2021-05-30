<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <br />
      <br />
      <div class="buttonContainer1">
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Natural Sciences</h4>
          </button>
        </div>
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">IT</h4>
          </button>
        </div>
        <div class="item1">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Economy/Culture & Tourism</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer2">
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Languages</h4>
          </button>
        </div>
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Educational Sciences</h4>
          </button>
        </div>
        <div class="item2">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Philosophy</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer3">
        <div class="item3">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">(Dental) Medicine</h4>
          </button>
        </div>
        <div class="item3">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Music</h4>
          </button>
        </div>
        <div class="item3">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Technical St.</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer4">
        <div class="item4">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Biotechnology</h4>
          </button>
        </div>
        <div class="item4">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Art</h4>
          </button>
        </div>
        <div class="item4">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Civil Engineering</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer5">
        <div class="item5">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Psychology</h4>
          </button>
        </div>
        <div class="item5">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Nursing</h4>
          </button>
        </div>
        <div class="item5">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Law</h4>
          </button>
        </div>
      </div>
      <div class="buttonContainer6">
        <div class="item6">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Maritime St.</h4>
          </button>
        </div>
        <div class="item6">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Theology</h4>
          </button>
        </div>
        <div class="item6">
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Kinesiology</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<style scoped>
.mainContent {
  margin-top: 180px;
  margin-left: 100px;
}
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
  order: 3;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item4 {
  order: 3;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item5 {
  order: 3;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}

.item6 {
  order: 3;
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
.buttonContainer4 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.buttonContainer5 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.buttonContainer6 {
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
  margin: 10px;
}
</style>
