<template>
  <div id="app">
    <!---TopNav--------------------------------------------------------->
    <div id="topNav">
      <nav
        class="navbar navbar-expand-lg navbar-light "
        style="background-color: #8763B5;"
      >
        <div class="container-fluid">
          <router-link to="/">
            <a
              class="navbar-brand logo"
              href="#"
              style="color: white; font-size:90px;"
            >
              Script
            </a>
          </router-link>
          <!--PlusIcon------>
          <router-link to="/add_script">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
          </router-link>
          <!--PlusIcon------>
          <button
            class="navbar-toggler"
            type="button"
            style="border-color:white;"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px;"
            >
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  style="border-radius:30px;"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn-search" type="submit">
                  Search
                </button>
              </form>
              <li class="nav-item dropdown">
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
                    width="30"
                    height="30"
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
                    <a class="dropdown-item" href="#">
                      Top Ratings
                    </a>
                  </li>
                  <li><a class="dropdown-item" href="#">Top Downloads</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
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
                    width="30"
                    height="30"
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
                  <li><a class="dropdown-item" href="#">Notification</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/my_downloads">
                  <a class="nav-link" href="#">
                    <!--DownloadIcon------>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
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
              <li class="nav-item">
                <router-link to="/my_account">
                  <a class="nav-link" href="#">
                    <!--AccountIcon------>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
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

        <div class="col-4 d-flex justify-content-center"></div>
      </span>
    </nav>
    <!---HeadingNav----------------------------------------------------->

    <!--<div id="pages">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/add_script">Add Script</router-link>
        |
        <router-link to="/my_account">My Account</router-link>
        |
        <router-link to="/my_downloads">My Downloads</router-link>
        |
        <router-link to="/script">Script</router-link>
        |
        <router-link to="/search_results">Search Results</router-link>
        |
        <router-link to="/study">Study</router-link>
        |
        <router-link to="/subject">Subject</router-link>
        |
        <router-link to="/university">University</router-link>
      </div>-->
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
.headingNav {
  width: 100%;
  height: 70px;
  background-color: #d1c1ed;
  padding: 10px;
  justify-content: center;
  text-align: center;
}
//---ikone------------------------//
.bi-plus-circle-fill {
  color: #16c937;
  margin-right: 10px;
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
  background-color: #d1c1ed;
}
.dropdown-item {
  border-radius: 30px;
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
</style>
