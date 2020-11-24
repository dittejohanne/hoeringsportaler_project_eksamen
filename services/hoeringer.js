import loaderService from "./loader.js";
class HoeringService {
  constructor() {}

  // async loadHoeringer() {
  //   try {
  //     let response = await fetch("http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed");
  //     console.log(response);
  //     let jsonData = await response.json();
  //     loaderService.show(false);
  //     return jsonData.results;
  //   } catch (error) {
  //     console.log('Error getting persos:', error);
  //     loaderService.show(false);
  //   }
  // }

  async getHoeringer() {

    return await fetch("http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed")
        .then(function (response) {
            return response.json();
        })
    
        .then((json) => {
          console.log(json);
            return json;
           
        });

}
}

const hoeringService = new HoeringService();
export default hoeringService;