import axios from 'axios'; // nema def.putanje jer nije dio naseg lokalnog projekta
import $router from '@/router';

// vezan uz konkretni backend(poziva ga)-----------------------------------------//
let Service = axios.create({
  baseURL: 'https://scripto-app.herokuapp.com/',
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
  try {
    request.headers['Authorization'] = 'Bearer ' + token;
  } catch (e) {
    console.error(e);
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

// metode za provjeru tokena)-----------------------------//

let Auth = {
  // SIGNUP
  async signup(username, email, password) {
    let response = await Service.post('/users', {
      username: username,
      email: email,
      password: password,
    });
    // kada se response vrati sa backend-a ima neke podatke
    let user = response.data;
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  },
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
  // PROMIJENA PASS-A
  async changePassword(old_password, new_password) {
    let response = await Service.patch('/users', {
      old_password: old_password,
      new_password: new_password,
    });

    let user = response.data;

    localStorage.setItem('user', JSON.stringify(user));

    return true;
  },
  // LOGOUT
  logout() {
    localStorage.removeItem('user');
  },
  // IZVLA??ENJE KORISNIKA IZ localStorage-a
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
  // IZVLA??ENJE TOKENA
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },
  // pomo??na metoda
  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },
  // korisno je za pozivanje potrebnih el. iz baze
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
  },
  async getOne(username) {
    let response = await Service.get(`/users/${username}`);
    let doc = response.data;

    return {
      id: doc._id,
      username: doc.username,
      email: doc.email,
      password: doc.password,
    };
  },
};

let Scripts = {
  add(script) {
    return Service.post('/scripts', script);
  },
  add_script(script_done) {
    return Service.post('/scripts', script_done);
  },
  // pretraga i dohvat 1 doc.
  async getOne(id) {
    let response = await Service.get(`/scripts/${id}`);
    let doc = response.data;
    return {
      id: doc._id,
      script_picture: doc.script_picture,
      script_name: doc.script_name,
      field: doc.field,
      study: doc.study,
      university: doc.university,
      script_rating: doc.script_rating,
      note: doc.note,
    };
  },
  // pretraga i dohvat VI??E doc.
  async getAll(searchTerm) {
    let options = {};

    if (searchTerm) {
      options.params = {
        _any: searchTerm,
      };
    }
    let response = await Service.get('/scripts', options);
    console.log('Available scripts: ', response);
    return response.data.map((doc) => {
      return {
        id: doc._id,
        script_picture: doc.script_picture,
        script_name: doc.script_name,
      };
    });
  },
};

let Comments = {
  add(comm) {
    return Service.post('/comments', comm);
  },
  // dohvati komentare
  async getAll(com) {
    let response = await Service.get(`/comments/${com}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        comment: doc.comment,
        script_id: doc.script_id,
        username: doc.username,
      };
    });
    return data;
  },
};

export { Service, Auth, Scripts, Comments };
