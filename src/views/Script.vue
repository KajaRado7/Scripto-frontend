<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <br />
      <br />

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active slide"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            class="slide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            class="slide"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="@/assets/script1.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="@/assets/script2.png" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/script3.png" class="d-block w-100" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container2">
        <!--two--->
        <div class="item2">
          <label for="scriptName">
            Script name :
          </label>
          <p>step by step - mat. zadaci</p>
          <hr />
        </div>
        <div class="item2">
          <label for="university">
            University :
          </label>
          <p>Juraj Dobrila University of Pula</p>
          <hr />
        </div>
      </div>

      <div class="container3">
        <!--three--->
        <div class="item3">
          <label for="field">
            Field :
          </label>
          <p>Natural Sciences</p>
          <hr />
        </div>
        <div class="item3">
          <label for="note">
            Note :
          </label>
          <p>Sretno sa učenjem! :)</p>

          <hr />
        </div>
      </div>

      <div class="container4">
        <!--Comments--->
        <div class="item4">
          <label for="study">
            Study :
          </label>
          <p>Undergraduate</p>
          <hr />
        </div>
        <div class="item4">
          <select name="rateScript" class="select" id="rating-select">
            <option disabled selected>
              ★ Rate this script ★
            </option>
            <option value="1" class="selected">
              1
            </option>
            <option value="2" class="selected">
              2
            </option>
            <option value="3" class="selected">
              3
            </option>
            <option value="4" class="selected">
              4
            </option>
            <option value="5" class="selected">
              5
            </option>
          </select>
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

<style scoped>
.mainContent {
  margin-top: 180px;
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
