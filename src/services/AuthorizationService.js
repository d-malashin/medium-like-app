import API from "@/services/ApiService";
import store from '@/store'
import router from '@/router'

class Authorization {
  checkRights() {
    if (!window.localStorage.getItem("role")) {
      window.localStorage.setItem("role", "user");
    }

    // const role = store.state.user.role;

    // if (!role) {
      switch (window.localStorage.getItem("role")) {
        case "writer": {
          store.dispatch("setRole", "writer");
          return "writer";
        }

        case "reader": {
          store.dispatch("setRole", "reader");
          return "reader";
        }

        case "user": {
          store.dispatch("setRole", false);
          return false;
        }

        default: {
          return false;
        }
      // }
    }
  }

  auth(email, password) {
    return API.getUser(email).then((res) => {
      if (password === res.password) {
        store.dispatch("setRole", res.role)
        window.localStorage.setItem("role", res.role)
        return
      }
      return "Wrong email or password";
    });
  }

  logout() {
    store.commit('writeRole', '')
    window.localStorage.setItem('role', 'user')
    console.log(router)
    router.push('/?sign-out')
  }
}

export default new Authorization();
