export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="borgermoeder" class="page">
       <h2>Borgermøder<h2> 

       <section class="coming-soon">
             <img src="../images/under-construction.svg">
             <h6>....Kommer snart</h6>
             </section>
      </section>
  
    `;
  }
}