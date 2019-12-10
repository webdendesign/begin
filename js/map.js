"use strict";

var title = [
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде"
];
var type = ["palace", "flat", "house", "bungalo"];
var rooms = [1, 2, 3, 4, 5];
var checkin = ["12:00", "13:00", "14:00"];
var checkout = ["12:00", "13:00", "14:00"];
var features = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];
var description = "";
var photos = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

var randomFeatures = function() {
  randomElement;
  return randomElement;
};

var usersAds = [
  {
    author: {
      avatar: "img/avatars/user01.png"
    },

    offer: {
      title: title[0],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[0],
      rooms: Math.floor(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[0],
      checkout: checkout[1],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  }
];

console.log(usersAds);

var turnMap = document.querySelector(".map");
turnMap.classList.remove("map--faded");

var template = document
  .querySelector("template")
  .content.querySelector(".map__pin");

var mapPins = document.querySelector(".map__pins");

var renderMen = function(user) {
  var userElement = template.cloneNode(true);

  userElement.style.left = usersAds[i].location.x + "px";
  userElement.style.top = usersAds[i].location.y + "px";

  userElement.querySelector("img").src = usersAds[i].author.avatar;

  userElement.querySelector("img").alt = usersAds[i].offer.title;

  return userElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < usersAds.length; i++) {
  fragment.appendChild(renderMen(usersAds[i]));
}

mapPins.appendChild(fragment);
