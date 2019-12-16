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
  },
  {
    author: {
      avatar: "img/avatars/user02.png"
    },

    offer: {
      title: title[1],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[1],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[1],
      checkout: checkout[2],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user03.png"
    },

    offer: {
      title: title[2],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[2],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[0],
      checkout: checkout[2],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user04.png"
    },

    offer: {
      title: title[3],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[0],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[1],
      checkout: checkout[1],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user05.png"
    },

    offer: {
      title: title[4],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[3],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[2],
      checkout: checkout[0],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user06.png"
    },

    offer: {
      title: title[5],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[3],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[2],
      checkout: checkout[2],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user07.png"
    },

    offer: {
      title: title[6],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[1],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[1],
      checkout: checkout[1],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    }
  },
  {
    author: {
      avatar: "img/avatars/user08.png"
    },

    offer: {
      title: title[7],
      address: "location.x, location.y",
      price: Math.floor(Math.random() * 1000000),
      type: type[0],
      rooms: Math.round(Math.random() * rooms.length),
      guests: Math.floor(Math.random() * 10),
      checkin: checkin[1],
      checkout: checkout[0],
      features: features,
      description: "",
      photos: photos
    },

    location: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000)
    }
  }
];

var turnMap = document.querySelector(".map");
// turnMap.classList.remove("map--faded");

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

// mapPins.appendChild(fragmentPin);

var fragmentCard = document.createDocumentFragment();
for (var i = 0; i < usersAds.length; i++) {
  fragmentCard.appendChild(renderAds(usersAds[i]));
}

// mapFiltersContainer.appendChild(fragmentCard);

//---------------------------------------4.1

var mapFilter = document.querySelectorAll(".map__filter");
var mapFeatures = document.querySelector(".map__features");
var adFormDisabled = document.querySelector(".ad-form--disabled");
var adFormHeader = document.querySelector(".ad-form-header");
var adFormElementAll = document.querySelectorAll(".ad-form__element");
var address = document.querySelector("#address");

var mapPinMain = document.querySelector(".map__pin--main");

mapPinMain.addEventListener("mouseup", function() {
  turnMap.classList.remove("map--faded");

  mapFeatures.removeAttribute("disabled");

  address.value = mapPinMain.style.left + ", " + mapPinMain.style.top;

  for (var i = 0; i < mapFilter.length; i++) {
    mapFilter[i].removeAttribute("disabled");
  }

  adFormDisabled.classList.remove("ad-form--disabled");
  adFormHeader.removeAttribute("disabled");
  for (var i = 0; i < adFormElementAll.length; i++) {
    adFormElementAll[i].removeAttribute("disabled");
  }

  mapPins.appendChild(fragmentPin);
});

var popup = fragmentCard.querySelector(".popup");

mapPins.addEventListener("click", function() {
  mapFiltersContainer.appendChild(fragmentCard);
});

var popupClose = fragmentCard.querySelector(".popup__close");
popupClose.addEventListener("click", function() {
  popup.classList.add("hidden");
});

//--------------------------------------4.2

var form = document.querySelector(".ad-form");
var type = form.querySelector("#type");
var option = type.querySelectorAll("option");
var price = form.querySelector("#price");
// console.log(option);
// console.log(price);
var valuePlaceholder = function(option) {
  if (option.value === "bungalo") {
    return (price.placeholder = "0");
  } else if (option.value === "flat") {
    return (price.placeholder = "1000");
  } else if (option.value === "house") {
    return (price.placeholder = "5000");
  } else if (option.value === "palace") {
    return (price.placeholder = "10000");
  }
};

for (var i = 0; i < option.length; i++) {
  valuePlaceholder(option[i]);
}

var timein = document.querySelector("#timein");
var timeout = document.querySelector("#timeout");
var optionTimein = timein.querySelectorAll("option");
var optionTimeout = timeout.querySelectorAll("option");

var choiceTime = function(timein) {
  if (timein === "После 12") {
    return (timeout.textContent = "Выезд до 12");
  } else if (timein === "После 13") {
    return (timeout.textContent = "Выезд до 13");
  } else if (timein === "После 14") {
    return (timeout.textContent = "Выезд до 14");
  }
};

for (var i = 0; i < optionTimein.length; i++) {
  choiceTime(optionTimein[i].textContent);
}

document.querySelector("form").onchange = function(evt) {
  this.timein.value = evt.target.value;
  this.timeout.value = evt.target.value;
};

// перемещение главного маркера по карте

// mapPinMain.addEventListener("mousedown", function(evt) {
//   evt.preventDefault();

//   var startCoords = {
//     x: evt.clientX,
//     y: evt.clientY
//   };

//   var onMouseMove = function(moveEvt) {
//     moveEvt.preventDefault();

//     var shift = {
//       x: startCoords.x - moveEvt.clientX,
//       y: startCoords.y - moveEvt.clientY
//     };

//     startCoords = {
//       x: moveEvt.clientX,
//       y: moveEvt.clientY
//     };

//     mapPinMain.style.top = mapPinMain.offsetTop - shift.y + "px";
//     mapPinMain.style.left = mapPinMain.offsetLeft - shift.x + "px";
//   };

//   var onMouseUp = function(upEvt) {
//     upEvt.preventDefault();

//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", mouseUp);
// });

// console.log(mapPinMain.startCoords.x);
