const auth = {
  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
    else return false;
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      localStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  }
};

export default auth;
