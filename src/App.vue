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
                      <span class="searchText2">name/study/university/★</span>
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
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.363));
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

.main {
  margin-left: 220px;
  font-size: 28px;
  padding: 0px 10px;
}

.form-control {
  border-radius: 30px;
}
.search {
  justify-content: center;
  margin: auto;
  width: 60%;
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

.nav-link {
  color: white;
}

//---ikone------------------------//

.rightIcons {
  padding: 20px;
}

.bi-plus-circle-fill {
  color: #16c937;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.363));
}

.bi-download {
  margin-right: 15px;
  color: white;
  margin-top: 15px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.363));
}

.bi-person-circle {
  margin-right: 30px;
  color: white;
  margin-top: 3px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.363));
}
.bi-search {
  margin-right: 30px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.363));
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
