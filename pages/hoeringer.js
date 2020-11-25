import hoeringService from "../services/hoeringer.js";
export default class HoeringerPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let hoeringer = await hoeringService.getHoeringer();
    this.appendHoeringer(hoeringer);
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="hoeringer" class="page">
     <h2>Høringer</h2>
     <p>I en høring har du mulighed for at gøre opmærksom på dine synspunkter om en konkret høringssag… Læs mere<p>
      <div id="grid-hoeringer" class="grid-container"></div>
      </section>
    `;
  }

  appendHoeringer(hoeringer) {
    console.log(hoeringer)
    let template = "";
    hoeringer.forEach((hoering) => {
      template += /*html*/ `
        <section id="hoeringContent">
        
        <div class="flexContent">
        <article id="info-boks">
        <h4>${hoering.acf.horingstype}</h4>
        <h4>${hoering.acf.horingsfrist}</h4>
        <img src="../images/comments_icon.svg">
        10
        </article>
        <article id="hoeringsImg">
        </article>
        </div>
        
        <article id="text-boks">
        <h2>${hoering.title.rendered}</h2>
        ${hoering.content.rendered}
        <img src="../images/location_icon.svg">
        <h2>${hoering.acf.omrade}</h2>
        <article>
        </section>
        `;
    });
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }

  // <section class="backgroundimg" style="background-image: url('${this.getFeaturedImageUrl(hoering)}')" >

    // // gets the featured image url
    // getFeaturedImageUrl(hoering) {
    //   let imageUrl = "";
    //   if (hoering._embedded['wp:featuredmedia']) {
    //     imageUrl = hoering._embedded['wp:featuredmedia'][0].source_url;
    //   }
    //   return imageUrl;
    // }

  }