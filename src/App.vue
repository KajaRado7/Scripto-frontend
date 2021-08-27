<template>
  <div id="app">
    <!---TopNav--------------------------------------------------------->
    <div
      v-if="this.$route.name !== 'Login' && this.$route.name !== 'Signup'"
      id="topNav"
    >
      <nav class="navbar navbar-expand-lg topNav">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto logoPlus">
              <li class="nav-item logo">
                <router-link to="/">
                  <a
                    class="navbar-brand logo"
                    href="#"
                    style="color: white; font-size:90px;"
                  >
                    <!--Logo------>
                    <img
                      src="@/assets/logo.png"
                      height="100"
                      width="215"
                      class="d-inline-block logo"
                      loading="lazy"
                    />
                  </a>
                </router-link>
              </li>
              <li
                class="nav-item plusCircle"
                style="display:flex;align-items:center"
              >
                <router-link to="/add_script">
                  <!--PlusIcon------>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    fill="currentColor"
                    class="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                    />
                  </svg>
                </router-link>
              </li>
            </ul>

            <div class="search">
              <router-link to="/scripts">
                <a class="nav-link" href="#">
                  <!--searchIcon------>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                  <span class="searchText">
                    <b style="font-size:25px;">
                      Search script by
                      <span class="searchText2">name/study/rating</span>
                    </b>
                  </span>
                </a>
              </router-link>
            </div>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item rightIcons">
                <router-link to="/my_downloads">
                  <a class="nav-link" href="#">
                    <!--DownloadIcon------>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
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
                  </a>
                </router-link>
              </li>

              <!--pozivamo funk. za logout-->
              <button @click="logout()" class="btn btn-lg btnSSU">
                <h5 class="btnText"><b>Logout</b></h5>
              </button>

              <li class="nav-item rightIcons accountIcon">
                <router-link to="/my_account">
                  <a class="nav-link" href="#">
                    <!--AccountIcon------>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </a>
                  <!--prikaz username-a od korisnika-->
                  <span class="username">
                    <b>{{ auth.username }}</b>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!---TopNav--------------------------------------------------------->

    <!---HeadingNav----------------------------------------------------->
    <nav
      v-if="this.$route.name !== 'Login' && this.$route.name !== 'Signup'"
      class="headingNav"
    >
      <span class="row mb-0">
        <div class="col-4 d-flex justify-content-center"></div>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Home')"
        >
          Home
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Add Script')"
        >
          Add Script
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('My Account')"
        >
          My Account
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('My Downloads')"
        >
          My Downloads
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Script')"
        >
          Script
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Scripts')"
        >
          Scripts
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Study')"
        >
          Study
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Field')"
        >
          Field
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('University')"
        >
          University
        </h1>

        <div class="col-4 d-flex justify-content-center"></div>
      </span>
    </nav>
    <!---HeadingNav----------------------------------------------------->

    <div class="row ">
      <div class="col-2">
        <!---LeftNav-------------------------------------------------------->
        <nav
          v-if="this.$route.name !== 'Login' && this.$route.name !== 'Signup'"
          class="leftNav"
        >
          <router-link to="/university">
            <a href="#university" style="display:flex;align-items:center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path
                  d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                />
              </svg>
              <span class="leftNavText">University</span>
            </a>
          </router-link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="currentColor"
            class="bi bi-stars"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
            />
          </svg>
        </nav>
        <!---LeftNav-------------------------------------------------------->
      </div>
      <div class="col-8"></div>
      <div class="col-2"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import router from '@/router';
import { Auth } from '@/services';

export default {
  data() {
    return {
      // pozivanje podataka
      auth: Auth.state,
    };
  },
  methods: {
    //promjena naziva stranice ovisno o ruti
    checkRoute(route) {
      if (this.$route.name == route) return true;
      else return false;
    },
    logout() {
      Auth.logout();
      // refresh trenutne stranice
      this.$router.go();
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.username {
  margin-right: 25px;
}
.searchText2 {
  white-space: nowrap;
  color: #d1c1ed;
}
.searchText {
  white-space: nowrap;
}
.searchText,
.username,
.bi-search {
  color: white;
}
.btnSSU {
  margin: 30px;
  border-radius: 60px;
  background-color: #d1c1ed;
  color: #8763b5;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.btnText {
  margin: 3px;
}
.logoPlus {
  padding-right: 15px;
}
#navbarTogglerDemo01 {
  background-color: #8763b5;
  border-radius: 30px;
}
.navbar-toggler {
  border: solid 2px white;
}
.leftNavText {
  display: block;
  margin-right: 1rem;
  margin-left: 1rem;
}
.main {
  margin-left: 220px;
  font-size: 28px;
  padding: 0px 10px;
}
.leftNav a {
  padding: 8px 8px 10px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  padding-top: 15px;
}
.leftNav a:hover {
  color: #d1c1ed;
}
.form-control {
  border-radius: 30px;
}
.search {
  justify-content: center;
  margin: auto;
  width: 60%;
}
.btnSearch {
  border-radius: 30px;
  background-color: #d1c1ed;
  margin-right: 25px;
  color: #8763b5;
}
.logo {
  margin-left: 10px;
}
.topNav {
  background-color: #8763b5;
  height: 145px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; //1.ima prednost
  width: 100%;
}
.headingNav {
  z-index: 9998; //2.ima prednost
  top: 140px;
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #d1c1ed;
  padding: 10px;
  justify-content: center;
  text-align: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.leftNav {
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 9997; //3.ima prednost
  top: 0;
  left: 0;
  background-color: #8763b5;
  background-image: linear-gradient(#8763b5, #e6e6e6);
  overflow-x: hidden;
  padding-top: 245px;
  text-align: left;
}
.nav-link {
  color: white;
}
.dropdown-menu {
  border-radius: 30px;
  height: 91px;
  border: 3px solid;
  border-color: #8763b5;
  background-color: #d1c1ed;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.dropdown-item {
  border-radius: 30px;
}
//---ikone------------------------//
.bi-stars {
  color: #8763b585;
  position: fixed;
  bottom: 20px;
  margin-left: 26px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}

.rightIcons {
  padding: 20px;
}

.bi-plus-circle-fill {
  color: #16c937;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}

.bi-download {
  margin-right: 15px;
  color: white;
  margin-top: 15px;
}

.bi-person-circle {
  margin-right: 30px;
  color: white;
  margin-top: 3px;
}
.bi-search {
  margin-right: 30px;
}

//---ikone------------------------//

body {
  background-image: url('~@/assets/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h1 {
  white-space: nowrap;
}
</style>
