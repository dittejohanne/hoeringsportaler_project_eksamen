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
      <section id="hoeringer" class="page">
        <header class="topbar">
          <h2>hoeringer</h2>
        </header>
        <div id="grid-hoeringer" class="grid-container"></div>
      </section>
    `;
  }

  appendHoeringer(hoeringer) {
    let template = "";
    for (let hoering of hoeringer) {
      template += /*html*/ `
        <article>
          <img src="${hoering.picture.large}">
          <h4>${hoering.name.first} ${hoering.name.last}</h4>
          <p><a href="mailto:${hoering.email}">${hoering.email}</a></p>
        </article>
        `;
    }
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }
}