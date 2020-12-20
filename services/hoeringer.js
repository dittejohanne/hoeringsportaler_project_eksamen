import loaderService from "./loader.js";
class HoeringService {
  constructor() {
    this.hoeringer = []; //global variable

  }

  // fetch all Høringer from WP
  async getHoeringer() {
    return await fetch(
        "http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed"
      )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        this.hoeringer = json; //saves json data in global variable
        return json; // ends function execution and specifies json to be returned to the function caller.
      });
  }

    // search functionality
 search(value) { //value in search field
  console.log(value);
 let searchQuery = value.toLowerCase(); //converts value to lower case letters and makes variable.
 let filteredHoeringer = []; //variable with empty array
 for (let hoering of this.hoeringer) { //loops through global variable with json data
   let title = hoering.title.rendered.toLowerCase(); // varibale of høringer titel to lower case letters
   if (title.includes(searchQuery)) { 
     filteredHoeringer.push(hoering); // push() adds hoeringer in array if titel includes in searchQuery
   }
 }
 return filteredHoeringer; //ends function execution and specifies array to be returned to the function caller.
}

  // fetch all locaitions from WP (filtrering)
  async getLocations() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=3')
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesLocation) {
        console.log(categoriesLocation);
        return categoriesLocation; //ends function execution and specifies categoriesLocation to be returned to the function caller.
      });
  }

  // fetch all status from WP (filtrering)
  async getStatus() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=10')
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesStatus) {
        console.log(categoriesStatus);
        return categoriesStatus;  //ends function execution and specifies categories to be returned to the function caller.
      });
  }

  // fetch all høringstyper from WP (filtrering)
  async getType() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=7')
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesType) {
        console.log(categoriesType);
        return categoriesType;  //ends function execution and specifies categoriesType to be returned to the function caller.
      });
  }

  // category selected event - fetch hoeringer by selected category
  async categorySelected(hoeringId) {
    console.log(`Location ID: ${hoeringId}`);
    if (hoeringId) {
      return await fetch(`http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed&categories=${hoeringId}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (hoeringer) {
          return hoeringer;  //ends function execution and specifies hoeringer to be returned to the function caller.
        });
    } else {
      // create feedback
    }
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

  defaultOpen() {
    // Get the element with id="defaultOpen" and click on it 
    document.getElementById("defaultOpen").click();
  }

  // // Triggers button "Filtrer" on mobile
  modalOpen() {
    // Get the modal
    let x = document.getElementById("myModal");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // When the user clicks on button "Ok" close modal
  modalClose() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  

}

const hoeringService = new HoeringService();
export default hoeringService;