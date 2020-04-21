import axios from "axios";

class API {
  getPosts() {
    return axios
      .get(`http://localhost:3000/posts`)
      .then(response => {
        return response.data
      })
      .catch((error) => {
        posts = [];
        throw error;
      });
  }

  getUser (email) {
    return axios.get(`http://localhost:3000/users?email=${email}`)
      .then(response => response.data.length > 0 ? response.data.find(user => user) : alert('User not found'))
      .catch( error => {throw error})
  }
}

export default new API();
