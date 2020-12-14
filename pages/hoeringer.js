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
    let districtByCategory = await hoeringService.locationSelected();
    console.log(districtByCategory);
    this.appendHoeringer(hoeringer);
    this.appendLocations(categories)
    this.appendDistrictByCategory(districtByCategory)
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
        <h3>${hoering.acf.omrade}</h3>
        </div>
        <div id="hearing">
        <img src="../images/hearing.svg">
        <h3>${hoering.acf.horingstype}</h3>
        </div>
        </div>
        
        </article>
        </section>
        `;
    });
    document.querySelector("#grid-hoeringer").innerHTML = template;
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

// append movies by genre
appendDistrictByCategory(districtByCategory) {
  let htmlTemplate = "";

  for (let district of districtByCategory) {
    htmlTemplate += `
      <article>
        <h2>${district.title.rendered} (${district.acf.year})</h2>
        <img src="${district.acf.img}">
        <p>${district.acf.description}</p>
        <iframe src="${district.acf.trailer}"></iframe>
      </article>
    `;
  }

  // if no movies, display feedback to the user
  if (districtByCategory.length === 0) {
    htmlTemplate = `
      <p>Ingen høringer</p>
    `;
  }

  document.querySelector('#movies-by-genre-container').innerHTML = htmlTemplate;
}



    // gets the featured image url
    getFeaturedImageUrl(hoering) {
      let imageUrl = "";
      if (hoering._embedded['wp:featuredmedia']) {
        imageUrl = hoering._embedded['wp:featuredmedia'][0].source_url;
      }
      return imageUrl;
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





<!------------------ Først forsøg på dropdown filtrering (VIRKER IKKE) --------------->
       <!------------------ Tab menu mobil ---------------->
         <!-- Tab links -->
         <div id="tab_mobile" class="tab">
         <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
         <button class="tablinks" onclick="openTabs(event, 'grid-hoeringer')" id="defaultOpen">Liste</button>
         <button class="tablinks" onclick="modalOpen()">Filtrér</button>
         </div>

            <!------------ Tab content mobile -------->
              
            <<div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
             
            <!-------- Område ---------->
         <div class="modal-location">
         <h4>Område</h4>
         <div class="dropdown">
         <button onclick="myFunction()" class="dropbtn">Vælg områder</button>
         <div id="myDropdown" class="dropdown-content">
           <input type="text" placeholder="Search.." class="myInput" onkeyup="filterFunction()">
           <a href="#about">About</a>
           <a href="#base">Base</a>
           <a href="#blog">Blog</a>
           <a href="#contact">Contact</a>
           <a href="#custom">Custom</a>
           <a href="#support">Support</a>
           <a href="#tools">Tools</a>
         </div>
         </div>
         </div>
       
          <!-------- Status ---------->
          <div id="modal-status">
          <h4>Status</h4>
          <label class="container">Alle
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
        
        <label class="container">Kommende
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        
        <label class="container">Aktive
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        
        <label class="container">Afsluttede
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        </div>  
       
       <!-------- Høringstype ---------->
       <div id="modal-hoeringstype">
       <h4>Høringstype</h4>
       <label class="container">Alle
       <input type="checkbox" checked="checked">
       <span class="checkmark"></span>
       </label>
       
       <label class="container">Lokalplan
       <input type="checkbox">
       <span class="checkmark"></span>
       </label>
       
       <label class="container">Kommunalplan
       <input type="checkbox">
       <span class="checkmark"></span>
       </label>
       
       <label class="container">Dagtilbud og skole
       <input type="checkbox">
       <span class="checkmark"></span>
       </label>
       
       <label class="container">Byggesager 
       <input type="checkbox">
       <span class="checkmark"></span>
       </label>
       
       <label class="container">Andet
       <input type="checkbox">
       <span class="checkmark"></span>
       </label>
       </div>
       
       <!-------- Periode ---------->
       <input readonly type="text" id="example" placeholder="">
       
          </div>
              </div>




         <!------------------ Tab menu desktop ---------------->
         <!-- Tab links -->
         <div class="tab" id="tab_desktop">
         <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
         <button class="tablinks" onclick="openTabs(event, 'grid-hoeringer')" id="defaultOpen">Liste</button>
         </div>

         <!-- <input type="search" placeholder="Search" onkeyup="search(this.value)">
         <section id="movies-by-genre-container" class="grid-container"></section> -->
    
          <!------------ Tab content desktop -------->


<div id="filtrering_desktop">
<div class="modal-location">
         <h4>Område</h4>
         <div class="dropdown">
         <button onclick="myFunctionFirst()" class="dropbtn">Vælg områder</button>
         <div id="myDropdownFirst" class="dropdown-content">
           <input type="text" placeholder="Search.." class="myInput" onkeyup="filterFunctionFirst()">
           <a href="#about">About</a>
           <a href="#base">Base</a>
           <a href="#blog">Blog</a>
           <a href="#contact">Contact</a>
           <a href="#custom">Custom</a>
           <a href="#support">Support</a>
           <a href="#tools">Tools</a>
         </div>
         </div>
         </div>
     
        <!-------- Status ---------->
        <div class="modal-location">
         <h4>Status</h4>
         <div class="dropdown">
         <button onclick="myFunction()" class="dropbtn">Vælg status</button>
         <div id="myDropdown" class="dropdown-content">
           <input type="text" placeholder="Search.." onkeyup="filterFunction()">
           <a href="#about">About</a>
           <a href="#base">Base</a>
           <a href="#blog">Blog</a>
           <a href="#contact">Contact</a>
           <a href="#custom">Custom</a>
           <a href="#support">Support</a>
           <a href="#tools">Tools</a>
         </div>
         </div>
         </div>
     
     <!-------- Høringstype ---------->
     <div class="modal-location">
         <h4>Høringstype</h4>
         <div class="dropdown">
         <button onclick="myFunction()" class="dropbtn">Vælg høringstype</button>
         <div id="myDropdown" class="dropdown-content">
           <input type="text" placeholder="Search.." onkeyup="filterFunction()">
           <a href="#about">About</a>
           <a href="#base">Base</a>
           <a href="#blog">Blog</a>
           <a href="#contact">Contact</a>
           <a href="#custom">Custom</a>
           <a href="#support">Support</a>
           <a href="#tools">Tools</a>
         </div>
         </div>
         </div>
     
     <!-------- Periode ---------->
     <div class="modal-location">
     <h4>Periode</h4>
     <div class="dropdown">
     <button onclick="myFunction()" class="dropbtn">Vælg periode</button>
     <div id="myDropdown" class="dropdown-content">
       <input type="text" placeholder="Search.." onkeyup="filterFunction()">
       <a href="#about">About</a>
       <a href="#base">Base</a>
       <a href="#blog">Blog</a>
       <a href="#contact">Contact</a>
       <a href="#custom">Custom</a>
       <a href="#support">Support</a>
       <a href="#tools">Tools</a>
     </div>
     </div>
     </div>
     </div>

     <!------------------ Først forsøg på dropdown filtrering (VIRKER IKKE) SLUT --------------->
     

      <!------------ områder dropdown ----------->

     <select id="select-district" name="districs" onchange="locationSelected(this.value)">
       <option value="">Alle områder</option>
     </select>
     <!--- <section id="movies-by-genre-container" class="grid-container"></section> -->

       <div id="grid-hoeringer" class="grid-container tabcontent"></div>
       
        <div id="Kort" class="tabcontent">
            <img src="../images/map.jpg">
              </div>
       
        </section>
      `;
    } 

  }