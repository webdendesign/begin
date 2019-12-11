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
      type: type[2],
      rooms: Math.round(Math.random() * rooms.length),
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

var turnMap = document.querySelector(".map");
turnMap.classList.remove("map--faded");

var templatePin = document
  .querySelector("template")
  .content.querySelector(".map__pin");

var mapPins = document.querySelector(".map__pins");

var templateCard = document
  .querySelector("template")
  .content.querySelector(".map__card");

var mapFiltersContainer = document.querySelector(".map__filters-container");

var renderMen = function(user) {
  var userElement = templatePin.cloneNode(true);

  userElement.style.left = usersAds[i].location.x + "px";
  userElement.style.top = usersAds[i].location.y + "px";

  userElement.querySelector("img").src = usersAds[i].author.avatar;

  userElement.querySelector("img").alt = usersAds[i].offer.title;

  return userElement;
};

var typeHouse = function(type) {
  if (type === "palace") {
    return "Дворец";
  } else if (type === "flat") {
    return "Квартира";
  } else if (type === "bungalo") {
    return "Бунгало";
  } else return "Дом";
};

var renderAds = function(ads) {
  var adsElement = templateCard.cloneNode(true);

  adsElement.querySelector(".popup__title").textContent =
    usersAds[i].offer.title;
  adsElement.querySelector(".popup__text--address").textContent =
    usersAds[i].offer.address;
  adsElement.querySelector(".popup__text--price").textContent =
    usersAds[i].offer.price + " /ночь";

  adsElement.querySelector(".popup__type").textContent = typeHouse(
    usersAds[i].offer.type
  );

  adsElement.querySelector(".popup__text--capacity").textContent =
    usersAds[i].offer.rooms +
    " комнаты для " +
    usersAds[i].offer.guests +
    " гостей";

  adsElement.querySelector(".popup__text--time").textContent =
    "Заезд после " +
    usersAds[i].offer.checkin +
    ", выезд до " +
    usersAds[i].offer.checkout;

  adsElement.querySelector(".popup__features").textContent =
    usersAds[i].offer.features;

  adsElement.querySelector(".popup__description").textContent =
    usersAds[i].offer.description;

  adsElement.querySelector(".popup__photos").src = usersAds[i].offer.photos;

  adsElement.querySelector(".popup__avatar").src = usersAds[i].author.avatar;

  return adsElement;
};

var fragmentPin = document.createDocumentFragment();
for (var i = 0; i < usersAds.length; i++) {
  fragmentPin.appendChild(renderMen(usersAds[i]));
}

mapPins.appendChild(fragmentPin);

var fragmentCard = document.createDocumentFragment();
for (var i = 0; i < usersAds.length; i++) {
  fragmentCard.appendChild(renderAds(usersAds[i]));
}

mapFiltersContainer.appendChild(fragmentCard);
