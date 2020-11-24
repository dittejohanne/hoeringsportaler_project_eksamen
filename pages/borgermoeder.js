import hoeringerService from "../services/hoeringer.js";
export default class HoeringerPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let hoeringer = await hoeringerService.loadHoeringer();
    this.appendHoeringer(hoeringer);
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="borgermoeder" class="page">
        <div id="grid-hoeringer" class="grid-container"></div>
      </section>
    `;
  }

  appendHoeringer(hoeringer) {
   let template = "";
    for (hoering of hoeringer) {
      template += /*html*/ `
        <article>
        <h2>${hoering.title.rendered}</h2>
        <p>${hoering.content.rendered}</p>
        </article>
        `;
    }
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }
}