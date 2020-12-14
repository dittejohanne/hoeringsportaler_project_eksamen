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

//   // search functionality
// search(value) {
//   let searchQuery = value.toLowerCase();
//   let filteredMovies = [];
//   for (let movie of movies) {
//     let title = movie.title.rendered.toLowerCase();
//     if (title.includes(searchQuery)) {
//       filteredMovies.push(movie);
//     }
//   }
//   console.log(filteredMovies);
//   appendMovies(filteredMovies);
// }

// fetch all Locaitions / categories from WP
getLocations() {
  fetch('http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/categories')
    .then(function(response) {
      return response.json();
    })
    .then(function(categories) {
      return categories;
    });
}

// // genre selected event - fetch movies by selected category
// genreSelected(genreId) {
//   console.log(`Genre ID: ${genreId}`);
//   if (genreId) {
//     showLoader(true);
//     fetch(`http://dittejohannejustesen.dk/wordpress/hoeringsportal/wp-json/wp/v2/posts?_embed&categories=${genreId}`)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(movies) {
//         console.log(movies);
//         appendMoviesByGenre(movies);
//         showLoader(false);
//       });
//   } else {
//     // create feedback
//   }
// }

// // append movies by genre
// appendMoviesByGenre(moviesByGenre) {
//   let htmlTemplate = "";

//   for (let movie of moviesByGenre) {
//     htmlTemplate += `
//       <article>
//         <h2>${movie.title.rendered} (${movie.acf.year})</h2>
//         <img src="${movie.acf.img}">
//         <p>${movie.acf.description}</p>
//         <iframe src="${movie.acf.trailer}"></iframe>
//       </article>
//     `;
//   }

//   // if no movies, display feedback to the user
//   if (moviesByGenre.length === 0) {
//     htmlTemplate = `
//       <p>No Movies</p>
//     `;
//   }

//   document.querySelector('#movies-by-genre-container').innerHTML = htmlTemplate;
// }


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

// When the user clicks on the button, toggle between hiding and showing the dropdown content */
myFunctionFirst() {
  document.getElementById("myDropdownFirst").classList.toggle("show");
}

filterFunctionFirst() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdownFirst");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
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