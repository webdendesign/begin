'use strict';

(function () {

  var map = document.querySelector('.map');

  var mapFiltersContainer = document.querySelector('.map__filters-container');
  var mapFilters = mapFiltersContainer.querySelector('.map__filters');
  var mapFilter = mapFilters.querySelectorAll('.map__filter');
  var mapFeatures = mapFilters.querySelector('.map__features');

  var adForm = document.querySelector('.ad-form');
  var adFormHeader = adForm.querySelector('.ad-form-header');
  var adFormElementAll = adForm.querySelectorAll('.ad-form__element');


  window.form = {
    activForm: function () {
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
  }
  //   var form = document.querySelector(".ad-form");
  //   var type = form.querySelector("#type");
  //   var option = type.querySelectorAll("option");
  //   var price = form.querySelector("#price");

  //   var valuePlaceholder = function (option) {
  //     if (option.value === "bungalo") {
  //       return (price.placeholder = "0");
  //     } else if (option.value === "flat") {
  //       return (price.placeholder = "1000");
  //     } else if (option.value === "house") {
  //       return (price.placeholder = "5000");
  //     } else if (option.value === "palace") {
  //       return (price.placeholder = "10000");
  //     }
  //   };

  //   for (var i = 0; i < option.length; i++) {
  //     valuePlaceholder(option[i]);
  //   }

  //   var timein = document.querySelector("#timein");
  //   var timeout = document.querySelector("#timeout");
  //   var optionTimein = timein.querySelectorAll("option");
  //   var optionTimeout = timeout.querySelectorAll("option");

  //   var choiceTime = function (timein) {
  //     if (timein === "После 12") {
  //       return (timeout.textContent = "Выезд до 12");
  //     } else if (timein === "После 13") {
  //       return (timeout.textContent = "Выезд до 13");
  //     } else if (timein === "После 14") {
  //       return (timeout.textContent = "Выезд до 14");
  //     }
  //   };

  //   for (var i = 0; i < optionTimein.length; i++) {
  //     choiceTime(optionTimein[i].textContent);
  //   }

  //   document.querySelector("form").onchange = function (evt) {
  //     this.timein.value = evt.target.value;
  //     this.timeout.value = evt.target.value;
  //   };
})();
