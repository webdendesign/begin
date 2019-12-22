'use strict';

(function () {

  // var map = document.querySelector('.map').classList.remove('map--faded');

  var mapPins = document.querySelector(".map__pins");

  var templatePin = document.querySelector('template').content.querySelector('.map__pin');

  var renderPin = function (user) {
    var userElement = templatePin.cloneNode(true);

    userElement.style.left = user.location.x + 'px';
    userElement.style.top = user.location.y + 'px';

    userElement.querySelector('img').src = user.author.avatar;

    userElement.querySelector('img').alt = user.offer.title;

    return userElement;
  };

  var renderPins = function (pins) {

    var fragmentPin = document.createDocumentFragment();

    for (var i = 0; i < pins.length; i++) {
      fragmentPin.appendChild(renderPin(pins[i]));
    }
    mapPins.appendChild(fragmentPin);
  }

  // renderPins(window.data);

})();
