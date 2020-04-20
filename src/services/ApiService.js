import axios from "axios";

class API {
  getPosts() {
    return axios
      .get(`http://localhost:3000/posts`)
      .then(response => {
      //   // let posts = [];
      //   // let currentTotal = data.length;
      //   // // let postsOnPage = 10;
      //   // // if (data.length / this.perPage > postsOnPage) {
      //   // //   currentTotal = this.perPage * postsOnPage;
      //   // // }
      //   // // this.total = currentTotal;
      //   // data.forEach((post) => {
      //   //   posts.push(post);
      //   //   //   this.$store.commit("setClaps", { claps: post.claps, id: post.id });
      //   // });
        return response.data
      })
      .catch((error) => {
        posts = [];
        throw error;
      });
  }
}

export default new API();
