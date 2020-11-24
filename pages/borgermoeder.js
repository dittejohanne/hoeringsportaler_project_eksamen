export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="borgermoeder" class="page">
       <h2>Borgermøder<h2> 
      </section>
    `;
  }
}