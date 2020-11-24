export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="hoeringer" class="page">
       <h2>Høringer<h2> 
       <p>I en høring har du mulighed for at gøre opmærksom på dine synspunkter om en konkret høringssag… Læs mere<p>
      </section>
    `;
  }
}