'use strict';

(function () {

  var map = document.querySelector('.map');

  var mapPins = document.querySelector('.map__pins');

  //---------------------------------------4.1

  var mapFiltersContainer = document.querySelector('.map__filters-container');
  var mapFilters = mapFiltersContainer.querySelector('.map__filters');
  var mapFilter = mapFilters.querySelectorAll('.map__filter');
  var mapFeatures = mapFilters.querySelector('.map__features');

  // ---------------------------

  var adForm = document.querySelector('.ad-form');
  var adFormHeader = adForm.querySelector('.ad-form-header');
  var adFormElementAll = adForm.querySelectorAll('.ad-form__element');

  // -----------------------------

  var address = adForm.querySelector('#address');

  var mapPinMain = mapPins.querySelector('.map__pin--main');

  var activForm = function () {
    map.classList.remove('map--faded');

    mapFeatures.removeAttribute('disabled');

    for (var i = 0; i < mapFilter.length; i++) {
      mapFilter[i].removeAttribute('disabled');
    }

    adForm.classList.remove('ad-form--disabled');
    adFormHeader.removeAttribute('disabled');

    for (var i = 0; i < adFormElementAll.length; i++) {
      adFormElementAll[i].removeAttribute('disabled');
    }
  }


  var setDefaultCoordsAddress = function () {
    var width = mapPinMain.getBoundingClientRect().width;
    var height = mapPinMain.getBoundingClientRect().height;
    return {
      x: Math.floor(mapPinMain.offsetLeft + width / 2),
      y: Math.floor(mapPinMain.offsetTop + height / 2),
    };
  };

  address.value = setDefaultCoordsAddress().x + ', ' + setDefaultCoordsAddress().y;

  mapPinMain.addEventListener('mouseup', function (evt) {
    evt.preventDefault;
    activForm();

    // mapPins.appendChild(fragmentPin);
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
