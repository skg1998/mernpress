import { signout } from "../user/api-auth";

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
  },
  signout(cb) {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    cb();
    //optional
    signout().then(data => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },
  updateUser(user, cb) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("jwt")) {
        let auth = JSON.parse(localStorage.getItem("jwt"));
        auth.user = user;
        localStorage.setItem("jwt", JSON.stringify(auth));
        cb();
      }
    }
  }
};

export default auth;
