// Initialize and add the map
function initMap() {
    // The location of Uluru
    var russia = { lat: 3.51602, lng: -2.1969 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: russia });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: russia, map: map });
}


// toggle menu
var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://dopeman55.github.io/EcommercePWA/serviceworker.js')
  .then((registration) => {
  console.log("service worker registered")
  })
  .catch((err) => {
  console.log("sw registraration "+ err)
  });
  }
