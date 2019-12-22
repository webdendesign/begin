'use strict';

(function () {

  var map = document.querySelector(".map");

  var mapFiltersContainer = map.querySelector(".map__filters-container");

  var templateCard = document.querySelector("template").content.querySelector(".map__card");

  var typeHouse = function (type) {
    if (type === "palace") {
      return "Дворец";
    } else if (type === "flat") {
      return "Квартира";
    } else if (type === "bungalo") {
      return "Бунгало";
    } else return "Дом";
  };

  var renderCard = function (card) {
    var adsElement = templateCard.cloneNode(true);

    adsElement.querySelector(".popup__title").textContent =
      card.offer.title;
    adsElement.querySelector(".popup__text--address").textContent =
      card.offer.address;
    adsElement.querySelector(".popup__text--price").textContent =
      card.offer.price + " /ночь";

    adsElement.querySelector(".popup__type").textContent = typeHouse(
      card.offer.type
    );

    adsElement.querySelector(".popup__text--capacity").textContent =
      card.offer.rooms +
      " комнаты для " +
      card.offer.guests +
      " гостей";

    adsElement.querySelector(".popup__text--time").textContent =
      "Заезд после " +
      card.offer.checkin +
      ", выезд до " +
      card.offer.checkout;

    adsElement.querySelector(".popup__features").textContent =
      card.offer.features;

    adsElement.querySelector(".popup__description").textContent =
      card.offer.description;

    adsElement.querySelector(".popup__photos").src = card.offer.photos;

    adsElement.querySelector(".popup__avatar").src = card.author.avatar;

    return adsElement;
  };

  var renderCards = function (cards) {
    var fragmentCard = document.createDocumentFragment();
    for (var i = 0; i < cards.length; i++) {
      fragmentCard.appendChild(renderCard(cards[i]));
    }

    mapFiltersContainer.appendChild(fragmentCard);
  }

  // renderCards(window.data);

})();
