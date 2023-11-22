import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

class LoginService {
  // Call request API login by method POST
  login(userInfo) {
    return axios.post("/api/login", userInfo);
  }
}
export default new LoginService();
