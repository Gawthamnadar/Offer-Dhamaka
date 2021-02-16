import { extendObservable } from "mobx";
import { configure } from "mobx";

class UserStore {
  constructor() {
    extendObservable(this, {
      pageLoading: false,
      isLoggedIn: false,
      username: "",
    });
    configure({
      enforceActions: "never",
    });
  }
}

export default new UserStore();
