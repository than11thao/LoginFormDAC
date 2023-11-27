import axios from "axios";
import api from "../api/axios";

class AccountServices {
    //Call request API login by method POST
    getAllAccount(token) {
        return api.get('/all_user', {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    postNewAccount(data, token) {
        return api.post('/new_user', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    searchAccount(data,token) {
        return api.post('/user_info', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    updateAccount(data, token) {
        return api.put('/update_user', data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }

    deleteAccount(data,token) {
      return api.delete('/delete_user', data, {
          headers: {
                'Authorization': `Basic ${token}`
            }
      });
    }

    deleteAllAccount(data,token) {
      return api.delete('/delete_all_user', data, {
          headers: {
                'Authorization': `Basic ${token}`
            }
      });
    }
}

export default new AccountServices();

