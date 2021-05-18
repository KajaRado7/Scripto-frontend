<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8" style="text-align:justify;">
      <br />
      <br />

      <div class="container1">
        <!--Croppa(u doradi-->
        <div class="item1">
          <label for="scriptPic">
            Script picture
            <span class="text-danger ml-1">*</span>
          </label>
          <div class="inputPic"></div>
          <br />
        </div>
      </div>

      <div class="container2">
        <div class="item2">
          <label for="scriptName">
            Script name
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <input
            type="text"
            maxlength="50"
            name="scriptName"
            class="form-control"
            id="scriptName"
            placeholder="e.g. Wapps_backend"
          />
        </div>
        <div class="item2">
          <label for="university">
            University
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <select name="universitySelect" class="select" id="university-select">
            <option disabled selected>
              - - Please choose an university - -
            </option>
            <option value="Juraj Dobrila University of Pula" class="selected">
              Juraj Dobrila University of Pula
            </option>
            <option value="University of Rijeka" class="selected">
              University of Rijeka
            </option>
            <option value="University of Dubrovnik" class="selected">
              University of Dubrovnik
            </option>
            <option value="University of Spilt" class="selected">
              University of Spilt
            </option>
            <option value="University of Osijek" class="selected">
              University of Osijek
            </option>
            <option value="University of Zadar" class="selected">
              University of Zadar
            </option>
            <option value="University of Zagreb" class="selected">
              University of Zagreb
            </option>
          </select>
        </div>
      </div>

      <div class="container3">
        <div class="item3">
          <label for="field">
            Field
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <select name="fieldSelect" class="select" id="field-select">
            <option disabled selected>- - Please choose a field - -</option>
            <option value="Natural Sciences" class="selected">
              Natural Sciences
            </option>
            <option value="IT" class="selected">IT</option>
            <option value="Economy/Culture & Tourism" class="selected">
              Economy/Culture & Tourism
            </option>
            <option value="Languages" class="selected">Languages</option>
            <option value="Educational Sciences" class="selected">
              Educational Sciences
            </option>
            <option value="Philosophy" class="selected">Philosophy</option>
            <option value="(Dental) Medicine" class="selected">
              (Dental) Medicine
            </option>
            <option value="Music" class="selected">Music</option>
            <option value="Technical St." class="selected">Tehnical St.</option>
            <option value="Biotechnology" class="selected">
              Biotechnology
            </option>
            <option value="Art" class="selected">Art</option>
            <option value="Civil Engineering" class="selected">
              Civil Engineering
            </option>
            <option value="Psychology" class="selected">Psychology</option>
            <option value="Nursing" class="selected">Nursing</option>
            <option value="Law" class="selected">Law</option>
            <option value="Maritime St." class="selected">Maritime St.</option>
            <option value="Theology" class="selected">Theology</option>
            <option value="Kinesiology" class="selected">Kinesiology</option>
          </select>
        </div>
        <div class="item3">
          <label for="note">
            Note :
          </label>
          <br />
          <input
            type="text"
            maxlength="50"
            name="note"
            class="form-control"
            id="note"
            placeholder="e.g. Tips&Tricks su na 5.str. !"
          />
        </div>
      </div>

      <div class="container4">
        <div class="item4">
          <label for="study">
            Study
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <select name="studySelect" class="select" id="study-select">
            <option disabled selected>- - Please choose a study - -</option>
            <option value="Graduate" class="selected">
              Graduate
            </option>
            <option value="Undergraduate" class="selected">
              Undergraduate
            </option>
          </select>
        </div>
        <div class="item4">
          <br />
          <button type="button" class="btn  btnSSU">
            <h4 class="btnText">Publish</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>
<style scoped>
.inputPic {
  height: 150px;
  background: #d1c1ed6b;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  border-radius: 39px;
}

.select {
  width: 100%;
}
.form-control,
select {
  background: transparent;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  border-radius: 39px;
  height: 70px;
  padding: 8px 20px;
}
.item1 {
  order: 1;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item2 {
  order: 2;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item3 {
  order: 2;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item4 {
  order: 2;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}

.container1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.container2 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.container3 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.container4 {
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
  height: 70px;
  table-layout: fixed;
  border-collapse: collapse;
}
.btnText {
  margin: 13px;
}
</style>
