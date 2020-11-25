import loaderService from "./loader.js";
class HoeringService {
  constructor() {}

  async getHoeringer() {
    return await fetch(
      "http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed&categories=2"
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }


  openTabs(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  
  }

  defaultOpen () {
   // Get the element with id="defaultOpen" and click on it 
   document.getElementById("defaultOpen").click();
  }

// // Triggers button "Hvad siger du?""
modalOpen() {
  // Get the modal
  let x = document.getElementById("myModal");
  if (x.style.display === "block") {
    x.style.display = "none";
} else {
    x.style.display = "block";
}
}
  
  
  // // When the user clicks on <span> (x), close the modal
  // modalClose() {
  //   let burger = document.querySelector("#Filtrer);
  //   burger.style.display = "none";
  // }
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }


}

const hoeringService = new HoeringService();
export default hoeringService;