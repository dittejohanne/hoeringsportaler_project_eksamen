import loaderService from "./loader.js";
class HoeringService {
  constructor() {}

  async getHoeringer() {
    return await fetch(
      "http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed&categories=2"
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
}

const hoeringService = new HoeringService();
export default hoeringService;