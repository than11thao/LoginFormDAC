import api from "../api/axios";

class AccountServices {
  //Call request API login by method POST
  userLogin(data) {
    return api.post("/api/login", data, { withCredentials: true });
  }

  getAccessToken(data) {
    return api.post("/api/refresh_token", data, { withCredentials: true });
  }

  getAllAccount(data) {
    return api.get("/api/all_user_info", data, { withCredentials: true });
  }

  postNewAccount(data, token) {
    return api.post("/api/add_user", data, {
      withCredentials: true,
      headers: { Authorization: token },
    });
  }

  searchAccount(data) {
    return api.get("/api/user_info", data);
  }

  updateAccount(data, token) {
    return api.put("/api/update_user", data, {
      withCredentials: true,
      headers: { Authorization: token },
    });
  }

  deleteAccount(data) {
    return api.delete("/api/delete_user", data);
  }

  deleteAllAccount(data) {
    return api.delete("/api/delete_all_user", data);
  }
}

export default new AccountServices();
