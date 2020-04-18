export const checkRights = () => {
    if (window.sessionStorage.getItem("role") === "writer") {
      return true;
    }
    if (window.sessionStorage.getItem("role") === "reader") return "reader";
  }