// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/borgermoeder.js";
import HoeringerPage from "./pages/hoeringer.js";
import spaService from "./services/spa.js";
import navService from "./services/nav.js"
import OmPage from "./pages/omHoeringsportalen.js";
import hoeringService from "./services/hoeringer.js"

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let hoeringerPage = new HoeringerPage();
let omPage = new OmPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.burgerMenu = () => navService.burgerMenu();
window.closeBurger = () => navService.closeBurger();
window.getFeaturedImageUrl = (hoering) => hoeringerPage.getFeaturedImageUrl(hoering);
window.openTabs = (evt, tabName) => hoeringService.openTabs(evt, tabName);
window.defaultOpen = () => hoeringService.defaultOpen();