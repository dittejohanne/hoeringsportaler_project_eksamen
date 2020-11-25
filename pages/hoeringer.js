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
     
      <!------------------ Tab menu ---------------->
       <!-- Tab links -->
       <div class="tab">
       <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
       <button class="tablinks" onclick="openTabs(event, 'Horinger')" id="defaultOpen">Liste</button>
       <button class="tablinks" id="filtrer" onclick="openTabs(event, 'Filtrér')">Filtrér</button>
       </div>
       
     <!-- Tab content -->
       
       <div id="Kort" class="tabcontent">
     <img src="../images/map.jpg">
       </div>
     
     <div id="grid-hoeringer" class="grid-container"></div>
      </section>
    `;
  } 

  appendHoeringer(hoeringer) {
    console.log(hoeringer)
    let template = "";
    hoeringer.forEach((hoering) => {
      template += /*html*/ `  
      <div id="Horinger" class="tabcontent">
      <section id="hoeringContent">
        
        <div class="flexContent">
        
        <section class="backgroundimg" style="background-image: url('${this.getFeaturedImageUrl(hoering)}')" >
        <article id="info-boks">
        <div id="paddingInfo">
        <h4>Høringsfrist</h4>
        <h3>${hoering.acf.horingsfrist}</h3>
        <div id="comments" class="flexContent">
        <img src="../images/comments_icon.svg">
        10
        </div>
        </div>
        </article>
        </section> 
        </div>
        
        <article id="textBoks">
        <h2>${hoering.title.rendered}</h2>
        <p id="overflowEllipsis">${hoering.content.rendered}</p>
        
        <div id="typesTextBoks">
        <div id="location">
        <img src="../images/location_icon.svg">
        <h3>${hoering.acf.omrade}</h3>
        </div>
        <div id="hearing">
        <img src="../images/hearing.svg">
        <h3>${hoering.acf.horingstype}</h3>
        </div>
        </div>
        
        </article>
        </section>
        </div>
        `;
    });
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }


    // gets the featured image url
    getFeaturedImageUrl(hoering) {
      let imageUrl = "";
      if (hoering._embedded['wp:featuredmedia']) {
        imageUrl = hoering._embedded['wp:featuredmedia'][0].source_url;
      }
      return imageUrl;
    }

  }