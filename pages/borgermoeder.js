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
      <section id="borgermoeder" class="page">
     <h2>Borgermøder</h2>
      <div id="grid-hoeringer" class="grid-container"></div>
      </section>
    `;
  }

  appendHoeringer(hoeringer) {
    console.log(hoeringer)
    let template = "";
    hoeringer.forEach((hoering) => {
      template += /*html*/ `
        <article>
        <h2>${hoering.title.rendered}</h2>
        ${hoering.content.rendered}
        </article>
        `;
    });
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }
  }