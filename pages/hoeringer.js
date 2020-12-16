import hoeringService from "../services/hoeringer.js";
export default class HoeringerPage {
  constructor() {
    this.init()
  }

  init() {
    this.initData();
    this.template();
  }
  async initData() {
    let hoeringer = await hoeringService.getHoeringer();
    let categories = await hoeringService.getLocations();
    let categoriesStatus = await hoeringService.getStatus();
    let categoriesType = await hoeringService.getType();
    this.appendHoeringer(hoeringer);
    this.appendLocations(categories)
    this.appendStatus(categoriesStatus)
    this.appendType(categoriesType)
  }

  appendHoeringer(hoeringer) {
    console.log(hoeringer)
    let template = "";
    hoeringer.forEach((hoering) => {
      template += /*html*/ `  
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
        <h3>${this.getFeaturedName(hoering)}</h3>
        </div>
        <div id="hearing">
        <img src="../images/hearing.svg">
        <h3>${this.getFeaturedType(hoering)}</h3>
        </div>
        </div>
        
        </article>
        </section>
        `;

    });
    document.querySelector("#grid-hoeringer").innerHTML = template;
  }

  template() {
    document.querySelector('#hoeringsportal').innerHTML += /*html*/ `
      <section id="hoeringer" class="page">
      <div id="header_img">
       <img src="../images/nyhavn-crop.png">
       </div> 

       <div id="manchet_mobile">
        <h2>Høringer</h2>
       <p>I en høring har du mulighed for at gøre opmærksom på dine synspunkter om en konkret høringssag… Læs mere<p>
       </div>

       <div id="manchet_desktop">
        <h2>Hvad er en høring?</h2>
       <p>I en høring har du mulighed for at gøre opmærksom på dine synspunkter om en konkret høringssag… Læs mere<p>
       </div>



       <!------------------ Tab menu mobil ---------------->
         <!-- Tab links -->
         <div id="tab_mobile" class="tab">
         <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
         <button class="tablinks" onclick="openTabs(event, 'grid-hoeringer')" id="defaultOpen">Liste</button>
         <button class="tablinks" onclick="modalOpen()">Filtrér</button>
         </div>

            <!------------ Tab content mobile -------->
              
            <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
             
            <!-------- Område filtrering ---------->
            <div class="filtrering-wrap">
            <h4>Område</h4>
            <select id="select-district" class="filtrering-mobile" name="districs" onchange="categorySelected(this.value)">
             <option value="">Vælg områder</option>
           </select>
           </div>
       
          <!-------- Status filtrering ---------->
          <div class="filtrering-wrap">
          <h4>Status</h4>
          <select id="select-status" name="districs" onchange="categorySelected(this.value)">
           <option value="">Vælg status</option>
         </select>
         </div>
       
       <!-------- Høringstype filtrering ---------->
       <div class="filtrering-wrap">
       <h4>Høringstype</h4>
       <select id="select-type" name="districs" onchange="categorySelected(this.value)">
        <option value="">Vælg Høringstype</option>
      </select>
      </div>

          <!-------- Periode filtrering ---------->

          <article id="timePeriod"><p>Periode</p>
                
          <select id="fromYear" value="2015" onchange="generateTable()">
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          </select>

          <p>Til</p>

          <select id="toYear" value="2019" onchange="generateTable()">
          <option >2015</option>
          <option >2016</option>
          <option >2017</option>
          <option >2018</option>
          <option selected>2019</option>
          </select>

          </article>
      
       
          </div>
              </div>

<!------------------ DESKTOP ---------------->

         <!------------------ Tab menu desktop ---------------->
         <!-- Tab links -->
         <div class="tab" id="tab_desktop">
         <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
         <button class="tablinks" onclick="openTabs(event, 'grid-hoeringer')" id="defaultOpen">Liste</button>
         </div>

       
          <!------------ Tab content desktop -------->

      <!---- områder dropdown ----->
      <div id="filtrering_desktop">
      <div class="modal-location">
      <h4>Periode</h4>
      <select id="select-district" name="districs" onchange="categorySelected(this.value)">
       <option value="">Vælg områder</option>
     </select>
     </div>
     </div>

     <input type="search" class="search" placeholder="Search" onkeyup="search(this.value)">

       <div id="grid-hoeringer" class="grid-container tabcontent"></div>
       
        <div id="Kort" class="tabcontent">
            <img src="../images/map.jpg">
              </div>
       
        </section>
      `;
  }

//-----------------------------JS FUNCTIONS()------------------------

  //-------område filtrering fuction()--------

  async filterByLocation(locationId) {
    console.log(locationId);
    let locations = await hoeringService.categorySelected(locationId);
    console.log(locations);
    this.appendHoeringer(locations);
  }

  // append all genres as select options (dropdown)
  appendLocations(districts) {
    console.log(districts);
    let htmlTemplate = "";
    for (let district of districts) {
      htmlTemplate += `
      <option value="${district.id}">${district.name}</option>
    `;
    }

    document.querySelector('#select-district').innerHTML += htmlTemplate;
  }

  //------------------status filtrering fuction()----------------

  async filterByStatus(locationId) {
    console.log(locationId);
    let status = await hoeringService.categorySelected(locationId);
    console.log(status);
    this.appendHoeringer(status);
  }

  // append all genres as select options (dropdown)
  appendStatus(districts) {
    console.log(districts);
    let htmlTemplate = "";
    for (let district of districts) {
      htmlTemplate += `
      <option value="${district.id}">${district.name}</option>
    `;
    }

    document.querySelector('#select-status').innerHTML += htmlTemplate;
  }

  async filterBySearch(value) {
    let search = hoeringService.search(value);
    this.appendHoeringer(search);
  }

   //------------------Høringstype filtrering fuction()----------------

   async filterByType(locationId) {
    let status = await hoeringService.categorySelected(locationId);
    this.appendHoeringer(status);
  }

  // append all genres as select options (dropdown)
  appendType(districts) {
    console.log(districts);
    let htmlTemplate = "";
    for (let district of districts) {
      htmlTemplate += `
      <option value="${district.id}">${district.name}</option>
    `;
    }

    document.querySelector('#select-type').innerHTML += htmlTemplate;
  }

  // gets the featured image url
  getFeaturedImageUrl(hoering) {
    let imageUrl = "";
    if (hoering._embedded['wp:featuredmedia']) {
      imageUrl = hoering._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }

    // gets the featured name of område
    getFeaturedName(hoering) {
      console.log(hoering);
      let name = "";
      if (hoering._embedded['wp:term']) {
        name = hoering._embedded['wp:term'][0][1].name;
      }
      return name;
    }

      // gets the featured name of område
      getFeaturedType(hoering) {
        let type = "";
        if (hoering._embedded['wp:term']) {
          type = hoering._embedded['wp:term'][0][3].name;
        }
        return type;
      }


}