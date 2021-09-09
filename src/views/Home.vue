<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 mainContent" style="text-align:justify;">
      <b-card class="mt-2 mx-auto card1" style="border-radius: 20px;">
        <b-card-text class="mt-2">
          <h3 class="text1">
            Welcome to
            <b style="color:#8763b5">Scripto</b>
            ! This app allows students to collaborate in terms of sharing
            scripts. If you want to publish your script or are just searching
            for one, everything is at your fingertips!
            <br />
            <br />
            In terms of finding the required script, you have many search
            options: by name, study, university and even rating!
            <br />
            <br />
            If you are the creator of the best script ever, simply click on the
            <b style="color:#16c937">green plus</b>
            button in the upper left corner of the page and……Voila!
          </h3>
        </b-card-text>
      </b-card>
      <br />
      <b-card class="mt-2 mx-auto card2" style="border-radius: 20px;">
        <b-card-text class="mt-2">
          <h3 class="text2">
            <b class="tips_tricks">✧ Tips & tricks for writing sripts ✧</b>
            <br />
            <br />
            <ol>
              <li>
                Shortening words, creating logical sentences from the words we
                want to remember, using rhythm and rhyme, presenting an image,
                making a mental map...
              </li>
              <li>Pay attention to facts & relevant examples.</li>
              <li>Use colors & different fonts!</li>
              <li>Find matching concepts and their interconnection.</li>
            </ol>
          </h3>
        </b-card-text>
      </b-card>
    </div>
    <div class="col-2"></div>
    <footer id="footer"></footer>
  </div>
</template>

<style scoped>
ol {
  list-style: none;
  counter-reset: item;
}
li {
  counter-increment: item;
  margin-bottom: 15px;
}
li:before {
  margin-right: 10px;
  content: counter(item);
  background: #8763b5;
  border-radius: 100%;
  color: white;
  width: 1.2em;
  text-align: center;
  display: inline-block;
}

.card2 {
  text-align: justify;
  background-color: #d1c1ed;
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.602),
    0 6px 20px 0 rgba(0, 0, 0, 0.137);
}
.card1 {
  text-align: justify;
  background-color: rgb(218, 216, 216);
  box-shadow: 0 4px 8px 0 rgba(2, 2, 2, 0.602),
    0 6px 20px 0 rgba(0, 0, 0, 0.137);
}
.text1 {
  text-align: justify;
  margin: 50px;
}
.text2 {
  text-align: justify;
  margin: 50px;
  color: #8763b5;
}
.mainContent {
  margin-top: 250px;
}
#footer {
  width: 100%;
  height: 80px;
}
</style>
