class Autorization {
  constructor() {}
    checkRights() {
    if (window.sessionStorage.getItem("role") === "writer") {
      console.log('writer')
      return true;
    }
    else if (window.sessionStorage.getItem("role") === "reader") {
      console.log('reader')

      return "reader"
    } else {
      console.log('user')
      return 'user'
    }
  }
}

export default new Autorization()