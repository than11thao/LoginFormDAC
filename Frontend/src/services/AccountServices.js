import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

class AccountServices {
    //Call request API login by method POST
    getAllAccount(token) {
        return axios.get('/all_user', {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    postNewAccount(data, token) {
        return axios.post('/new_user', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    searchAccount(data,token) {
        return axios.post('/user_info', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    updateAccount(data, token) {
        return axios.put('/update_user', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    deleteAccount(data,token) {
      return axios.delete('/delete_user', data, {
          headers: {
                'Authorization': `Basic ${token}`
            }
      });
    }

    deleteAllAccount(data,token) {
      return axios.delete('/delete_all_user', data, {
          headers: {
                'Authorization': `Basic ${token}`
            }
      });
    }
}

export default new AccountServices();

