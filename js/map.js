'use strict';

(function () {

  var map = document.querySelector('.map');

  var mapPins = map.querySelector('.map__pins');

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

  var setDefaultCoordsAddress = function () {
    var width = mapPinMain.getBoundingClientRect().width;
    var height = mapPinMain.getBoundingClientRect().height;
    return {
      x: Math.floor(mapPinMain.offsetLeft + width / 2),
      y: Math.floor(mapPinMain.offsetTop + height / 2),
    };
  };

  address.value = setDefaultCoordsAddress().x + ', ' + setDefaultCoordsAddress().y;

  var mapPin = mapPins.querySelector('.map__pin');

  mapPinMain.addEventListener('mouseup', function (evt) {
    evt.preventDefault;
    window.form.activForm();
    mapPin.classList.remove('hidden');
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
