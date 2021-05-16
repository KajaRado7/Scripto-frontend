<template>
  <div id="app">
    <!---TopNav--------------------------------------------------------->
    <div id="topNav">
      <nav class="navbar navbar-expand-lg topNav">
        <div
          class="navbar-collapse collapse w-68 order-1 order-md-0 dual-collapse2"
        >
          <ul class="navbar-nav mr-auto">
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
                    class="d-inline-block logo"
                    loading="lazy"
                  />
                  <!--Logo------>
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
                <!--PlusIcon------>
              </router-link>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="mx-auto">
          <!--searchBar ( u doradi )-->
          <form class="search d-flex">
            <input
              class="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn" type="submit">
              Search
            </button>
          </form>
          <!--searchBar ( u doradi )-->
        </div>

        <div class="navbar-collapse collapse w-68 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown rightIcons">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollDropdownFilter"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <!--FilterIcon------>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-filter-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                  />
                  <path
                    d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <!--FilterIcon------>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <router-link to="/top_ratings">
                    <a class="dropdown-item" href="#">
                      Top Ratings
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/top_downloads">
                    <a class="dropdown-item" href="#">Top Downloads</a>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown rightIcons">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollDropdownNotif"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <!--NotificationIcon------>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-bell"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                  />
                </svg>
                <!--NotificationIcon------>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li><a class="dropdown-item" href="#">Notification1</a></li>
                <li><a class="dropdown-item" href="#">Notification2</a></li>
              </ul>
            </li>
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
                  <!--DownloadIcon------>
                </a>
              </router-link>
            </li>
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
                  <!--AccountIcon------>
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!---TopNav--------------------------------------------------------->

    <!---HeadingNav----------------------------------------------------->
    <nav class="headingNav">
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
          v-if="checkRoute('Search Results')"
        >
          Search Results
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Study')"
        >
          Study
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Subject')"
        >
          Subject
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('University')"
        >
          University
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Top Ratings')"
        >
          Top Ratings
        </h1>
        <h1
          class="col-4 d-flex justify-content-center"
          v-if="checkRoute('Top Downloads')"
        >
          Top Downloads
        </h1>
        <div class="col-4 d-flex justify-content-center"></div>
      </span>
    </nav>
    <!---HeadingNav----------------------------------------------------->

    <div class="row ">
      <div class="col-2">
        <!---LeftNav-------------------------------------------------------->
        <nav class="leftNav">
          <router-link to="/subject"><a href="#about">Subject</a></router-link>
          <router-link to="/study"><a href="#services">Study</a></router-link>
          <router-link to="/university">
            <a href="#clients">University</a>
          </router-link>
        </nav>
        <!---LeftNav-------------------------------------------------------->
      </div>
      <div class="col-8"></div>
      <div class="col-2">desno</div>
    </div>
    <router-view />
  </div>
</template>

<script>
import router from '@/router';

export default {
  methods: {
    //promjena naziva stranice ovisno o ruti
    checkRoute(route) {
      if (this.$route.name == route) return true;
      else return false;
    },
  },
};
</script>

<style lang="scss">
.main {
  margin-left: 220px;
  font-size: 28px;
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .leftNav {
    padding-top: 15px;
  }
  .leftNav a {
    font-size: 18px;
  }
}

.leftNav {
  height: 100%;
  width: 220px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #8763b5;
  overflow-x: hidden;
  padding-top: 25px;
  text-align: left;
}

.leftNav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  padding-top: 15px;
}

.leftNav a:hover {
  color: #d1c1ed;
}

.btn {
  border-radius: 30px;
  background-color: #d1c1ed;
  margin-left: 10px;
}
.topNav {
  background-color: #8763b5;
  height: 140px;
}
.leftNav {
  background-color: #8763b5;
  height: 100%;
}
.logo {
  margin-left: 10px;
}
.headingNav {
  width: 100%;
  height: 70px;
  background-color: #d1c1ed;
  padding: 10px;
  justify-content: center;
  text-align: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
//---ikone------------------------//
.accountIcon {
  margin-right: 17px;
}
.rightIcons {
  padding: 15px;
}

.bi-plus-circle-fill {
  color: #16c937;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
}
.bi-filter-square {
  color: white;
}
.bi-bell {
  color: white;
}
.bi-download {
  color: white;
}
.bi-person-circle {
  color: white;
}
//---ikone------------------------//
.nav-link {
  color: white;
}
.btn-search {
  border-radius: 30px;
  background-color: #d1c1ed;
  margin-left: 10px;
  margin-right: 10px;
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
