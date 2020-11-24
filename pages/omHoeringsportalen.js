export default class OmPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="om" class="page">
       <h2>Om høringsportalen<h2> 
       <p><p>
      </section>
    `;
  }
}