import axios from 'axios'; // nema def.putanje jer nije dio naseg lokalnog projekta
import $router from '@/router';

// vezan uz konkretni backend(poziva ga)
let Service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000, // 3 sekunde
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// AXIOS INTERCEPTORI
// request
Service.interceptors.request.use((request) => {
  let token = Auth.getToken();
  // ako token ne postoji preusmjeri korisnika na login
  if (!token) {
    $router.go();
    return;
  } else {
    request.headers['Authorization'] = 'Bearer' + token;
  }
  return request;
});
// response
Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout(); // brisanje tokena + refresh stranice
      $router.go();
    }
  }
);

// objekt sa metodama za provjeravanje tokena
// poziva se kada stisnemo Login button
let Auth = {
  // LOGIN
  async login(username, password) {
    let response = await Service.post('/auth', {
      username: username,
      password: password,
    });
    // kada se response vrati sa backend-a ima neke podatke
    let user = response.data;
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  },
  // LOGOUT
  logout() {
    localStorage.removeItem('user');
  },
  // IZVLAČENJE KORISNIKA IZ localStorage-a
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
  // IZVLAČENJE TOKENA
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },
  // pomoćna metoda
  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },
  // korisno je za pozivanje preko triple dot operatora
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
    get username() {
      let user = Auth.getUser();

      if (user) {
        return user.username;
      }
    },
    /*get password() {
      let user = Auth.getUser();

      if (user) {
        return user.password;
      }
    },*/
  },
};

export { Service, Auth };
