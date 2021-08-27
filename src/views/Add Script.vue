<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <form novalidate @submit.prevent="add_script">
        <div class="container1">
          <div class="item1">
            <label for="scriptPicture">
              Script picture
              <span class="text-danger ml-1">*</span>
            </label>
            <br />
            <input
              v-model="script_picture"
              type="text"
              maxlength="50"
              name="scriptPicture"
              class="form-control"
              id="scriptPicture"
              placeholder="picture url"
            />
          </div>
          <div class="item1">
            <label for="scriptRating">
              Rating
              <span class="text-danger ml-1">*</span>
            </label>
            <br />
            <input
              v-model="script_rating"
              type="text"
              maxlength="50"
              name="scriptRating"
              class="form-control"
              id="scriptRating"
              placeholder="rate your script (1-5)"
            />
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
              v-model="script_name"
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
              v-model="university"
              :options="university_options"
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
              v-model="field"
              :options="field_options"
              class="select"
              id="field-select"
            ></b-form-select>
          </div>
          <div class="item3">
            <label for="note">
              Note :
              <span class="text-danger ml-1">*</span>
            </label>
            <br />
            <input
              v-model="note"
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
            <b-form-select
              v-model="study"
              :options="study_options"
              class="select"
              id="study-select"
            ></b-form-select>
          </div>
          <div class="item4">
            <br />
            <button type="submit" class="btn  btnSSU">
              <h4 class="btnText">Publish</h4>
            </button>
          </div>
        </div>
        <p class="error">{{ error }}</p>
        <p class="message">{{ message }}</p>
      </form>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { Service, Scripts } from '@/services/index.js';

export default {
  data() {
    return {
      error: '',
      message: '',

      script_picture: '',
      script_name: '',
      field: '',
      study: '',
      university: '',
      script_rating: '',
      note: '',

      study_options: [
        { text: '- - Please choose a study - -', value: null },
        'Graduate',
        'Undergraduate',
      ],

      university_options: [
        { text: '- - Please choose an university - -', value: null },
        'Juraj Dobrila University of Pula',
        'University of Rijeka',
        'University of Dubrovnik',
        'University of Split',
        'University of Osijek',
        'University of Zadar',
        'University of Zagreb',
      ],

      field_options: [
        { text: '- - Please choose a field - -', value: null },
        'Natural Sciences',
        'IT',
        'Economy/Culture & Tourism',
        'Languages',
        'Educational Sciences',
        'Philosophy',
        '(Dental)Medicine',
        'Music',
        'Technical St.',
        'Biotechnology',
        'Art',
        'Civil Engineering',
        'Psychology',
        'Nursing',
        'Law',
        'Maritime St.',
        'Theology',
        'Kinesiology',
      ],
    };
  },

  methods: {
    async add_script() {
      if (
        this.script_picture == '' ||
        this.script_name == '' ||
        this.field == '' ||
        this.study == '' ||
        this.university == '' ||
        this.script_rating == '' ||
        this.note == ''
      ) {
        this.error = 'Please fill in all the input fields!';
      } else {
        // spremanje podataka
        let script_done = {
          script_picture: this.script_picture,
          script_name: this.script_name,
          field: this.field,
          study: this.study,
          university: this.university,
          script_rating: this.script_rating,
          note: this.note,
        };
        let script_saved = await Scripts.add_script(script_done);
        console.log('Saved script: ', script_saved);
        this.message = 'Script added to Scripto! :)';
      }
    },
  },
};
</script>

<style scoped>
.error,
.message {
  margin-top: 10px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error {
  color: red;
}
.message {
  color: #8763b5;
}
.mainContent {
  margin-top: 250px;
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
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.287),
    0 6px 20px 0 rgba(95, 95, 95, 0.075), 0 6px 20px 0 rgba(95, 95, 95, 0.075);
}
.item1 {
  order: 1;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}
.item2,
.item3,
.item4 {
  order: 2;
  flex-grow: 2;
  width: 100%;
  margin: 1rem;
}

.container1,
.container2,
.container3,
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
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.459));
  width: 100%;
  height: 70px;
  table-layout: fixed;
  border-collapse: collapse;
}
.btnText {
  margin: 13px;
}
</style>
