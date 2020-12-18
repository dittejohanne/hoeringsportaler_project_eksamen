export default class OmPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="om" class="page">
       <h2>Om Høringsportalen<h2> 
       <section class="coming-soon">
             <img src="../images/under-construction.svg">
             <h6>....Kommer snart</h6>
             </section>
      </section>
      </section>
    `;
  }
}