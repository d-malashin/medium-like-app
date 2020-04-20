class Autorization {
  constructor() {}
  checkRights() {
    if (window.sessionStorage.getItem("role") === "writer") {
      return true;
    } else if (window.sessionStorage.getItem("role") === "reader") {
      return "reader";
    } else {
      return "user";
    }
  }

  auth() {}
}

export default new Autorization();
