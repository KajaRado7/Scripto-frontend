<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
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
          <b-form-select
            v-model="add_script.university"
            :options="university"
            class="select"
            id="university-select"
          ></b-form-select>
        </div>
      </div>

      <div class="container3">
        <div class="item3">
          <label for="field">
            Field
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <b-form-select
            v-model="add_script.field"
            :options="field"
            class="select"
            id="university-select"
          ></b-form-select>
        </div>
        <div class="item3">
          <label for="note">
            Note :
          </label>
          <br />
          <input
            v-model="add_script.note"
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
            <option class="selected">
              {{}}
            </option>
          </select>
        </div>
        <div class="item4">
          <br />
          <button @click="publish" class="btn  btnSSU">
            <h4 class="btnText">Publish</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { Service } from '@/service/service.js';

export default {
  data() {
    return {
      add_script: {
        script_name: null,
        field: null,
        study: null,
        university: null,
        note: null,
      },

      university: [
        { text: '-- Odaberite nesto --', value: null },
        'Sveučilište Jurja Dobrile u Puli',
        'Sveučilište u Splitu',
        'Sveučilište u Splitu',
        'Sveučilište u Splitu',
        'Sveučilište u Splitu',
      ],

      field: [{ text: '-- Odaberite --', value: null }, 'IT', 'ART', 'LAW'],
    };
  },

  methods: {
    publish() {
      let newAddScript = {
        script_name: this.add_script.script_name,
        field: this.add_script.field,
        study: this.add_script.study,
        university: this.add_script.university,
        note: this.add_script.note,
      };

      console.log(newAddScript);

      Service.post('/scripts', newAddScript).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style scoped>
.mainContent {
  margin-top: 250px;
  margin-left: 100px;
}
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
