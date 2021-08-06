<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <h2>*mjesto za sliku*</h2>
      <div class="container2">
        <!--two--->
        <div class="item2">
          <label for="scriptName">
            Script name :
          </label>
          <hr />
        </div>
        <div class="item2">
          <label for="university">
            University :
          </label>
          <hr />
        </div>
      </div>

      <div class="container3">
        <!--three--->
        <div class="item3">
          <label for="field">
            Field :
          </label>
          <hr />
        </div>
        <div class="item3">
          <label for="note">
            Note :
          </label>
          <hr />
        </div>
      </div>

      <div class="container4">
        <!--Comments--->
        <div class="item4">
          <label for="study">
            Study :
          </label>
          <hr />
        </div>
        <div class="item4">
          <label for="download" class="download">
            Rate it :
          </label>
          <b-form-select
            :options="rate"
            class="select"
            id="rate-script"
          ></b-form-select>
        </div>
        <div class="item4">
          <label for="download" class="download">
            Download :
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            />
          </svg>
        </div>
      </div>
      <div class="container5">
        <!--three--->
        <div class="item5">
          <label for="comment">
            Comment :
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="e.g. Super skripta! Tnxx"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rate: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style scoped>
.mainContent {
  margin-top: 250px;
  margin-left: 100px;
}
.btn-outline-secondary {
  border: none;
  background-color: #d1c1ed;
  color: #8763b5;
  width: 20%;
}
#footer {
  width: 100%;
  height: 80px;
}
.bi-download,
.bi-star-fill {
  color: #8763b5;
}
.download {
  margin-right: 15px;
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
.slide {
  margin: 3px;
  padding: 7px;
  border-radius: 2em;
}
.visually-hidden {
  color: #8763b5;
}
p {
  color: #8763b5;
}
hr {
  border: 1px solid;
  border-color: #8763b5;
}
/*.inputPic {
  height: 150px;
  background: #d1c1ed6b;
  border: 3px solid #8763b5;
  box-sizing: border-box;
  border-radius: 39px;
}*/

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
  order: 3;
  flex-grow: 3;
  width: 100%;
  margin: 1rem;
}
.item5 {
  order: 1;
  flex-grow: 1;
  width: 100%;
  margin: 1rem;
}
.carousel-inner {
  width: 100%;
}
.carouselExampleDark,
.carousel-control-next,
.carousel-control-prev {
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
.container5 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
</style>
