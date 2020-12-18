export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#hoeringsportal").innerHTML += /*html*/ `
     <!--Burgermenu-->
     <nav class="tabbar">
     <div id="BurgerMenu">
     <div id="burgerdropdown">
       <div id="burgerbutton" onclick="burgerMenu()">
         <div class="burger"></div>
         <div class="burger"></div>
         <div class="burger"></div>
       </div>
       <div id="burgercontent">
         <ul>
           <li><a class="liAbout menuLink" href="#hoeringer" onclick="closeBurger()">Høringer</a></li>
           <li><a class="liMerch menuLink" href="#borgermoeder" onclick="closeBurger()">Borgermøder</a></li>
           <li><a class="liInfo menuLink" href="#om" onclick="closeBurger()">Om Høringsportalen</a></li>
         </ul>
       </div>
     </div>
   </div>
   </nav>
   <!--Burgermenu slut-->
 
    <nav class="tabbar">
    <div id="MegaMenu">
        <a href="#hoeringer">Høringer</a>
        <a href="#borgermoeder">Borgermøder</a>
        <a href="#om">Om Høringerportaler</a>
        <div>
        </nav>
    
        `;
  }       

  // <div id="tab_mobile" class="tab">
  // <button class="tablinks" onclick="openTabs(event, 'Kort')">Kort</button>
  // <button class="tablinks" onclick="openTabs(event, 'grid-hoeringer')" id="defaultOpen">Liste</button>
  // <button class="tablinks" onclick="modalOpen()">Filtrér</button>
  // </div>


}