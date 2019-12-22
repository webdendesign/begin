"use strict";

(function () {

  var map = document.querySelector(".map");

  var mapPins = document.querySelector(".map__pins");

  var mapFiltersContainer = document.querySelector(".map__filters-container");

  //---------------------------------------4.1

  var mapFilter = document.querySelectorAll(".map__filter");
  var mapFeatures = document.querySelector(".map__features");
  var adFormDisabled = document.querySelector(".ad-form--disabled");
  var adFormHeader = document.querySelector(".ad-form-header");
  var adFormElementAll = document.querySelectorAll(".ad-form__element");
  var address = document.querySelector("#address");

  var mapPinMain = document.querySelector(".map__pin--main");

  mapPinMain.addEventListener("mouseup", function () {
    map.classList.remove("map--faded");

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

  // var popup = fragmentCard.querySelector(".popup");

  // mapPins.addEventListener("click", function () {
  //   mapFiltersContainer.appendChild(fragmentCard);
  // });

  // var popupClose = fragmentCard.querySelector(".popup__close");
  // popupClose.addEventListener("click", function () {
  //   popup.classList.add("hidden");
  // });

})();
