import loaderService from "./loader.js";
class HoeringService {
  constructor() {
    this.hoeringer = [];

  }

  async getHoeringer() {
    return await fetch(
        "http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed"
      )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        this.hoeringer.json; //saves json in global variable
        return json;
      });
  }

    // search functionality
 search(value) {
  console.log(value);
 let searchQuery = value.toLowerCase();
 let filteredHoeringer = [];
 for (let hoering of this.hoeringer) {
   let title = hoering.title.rendered.toLowerCase();
   if (title.includes(searchQuery)) {
     filteredHoeringer.push(hoering);
   }
 }
 return filteredHoeringer;
}

  // fetch all Locaitions / categories from WP
  async getLocations() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=3')
      .then(function (response) {
        return response.json();
      })
      .then(function (categories) {
        console.log(categories);
        return categories;
      });
  }

  async getStatus() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=10')
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesStatus) {
        console.log(categoriesStatus);
        return categoriesStatus;
      });
  }

  async getType() {
    return await fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories?parent=7')
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesType) {
        console.log(categoriesType);
        return categoriesType;
      });
  }

  // category selected event - fetch hoeringer by selected category
  async categorySelected(locationId) {
    console.log(`Location ID: ${locationId}`);
    if (locationId) {
      //showLoader(true);
      return await fetch(`http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed&categories=${locationId}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (locations) {
          //showLoader(false);
          return locations;
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
  
//   generateTable() {

//     let from = document.querySelector('#fromYear'); //makes variable: "from" by Id #fromYear
//     let to = document.querySelector('#toYear'); //makes variable: "to" by Id #toYear

//     // Change labes of chart
//     chartService.chart.options = {

//         scales: {
//             xAxes: [{
//                 ticks: {
//                     min: from.value,
//                     max: to.value
//                 }
//             }]

//         }
//     };
//     chartService.chart.update();



//     let htmlTemplate = /*html*/ `
// <table id="graphTable">
// <tbody>
// <tr id="thFirst">
// <th></th>
// <th id="fromYearTable">${from.value}</th> <!-- Gets the value of the "from" selectbox -->
// <th id="toYearTable">${to.value}</th> <!-- Gets the value of the "to" selectbox -->
// </tr>`;

// }


  // When the user clicks on <span> (x), close the modal
  modalClose() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }


}

const hoeringService = new HoeringService();
export default hoeringService;