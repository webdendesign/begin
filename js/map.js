var title = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var type = ['palace', 'flat', 'house', 'bungalo'];
var rooms = [1, 2, 3, 4, 5];
var checkin = ['12:00', '13:00', '14:00'];
var checkout = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var description = '';
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var usersAds = [
  {
    'author': 'img/avatars/user01.png',

    'offer': ['title[0]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[0]', 'rooms[Math.floor(Math.random() * rooms.length)', 'guests[Math.floor(Math.random() * 10)]', 'checkin[0]', 'checkout[1]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    // 'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
    'location': ['x = 400', 'y = 400']
  },
  {
    'author': 'img/avatars/user02.png',

    'offer': ['title[1]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[1]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[1]', 'checkout[2]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user03.png',

    'offer': ['title[2]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[2]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[1]', 'checkout[1]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user04.png',

    'offer': ['title[3]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[3]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[0]', 'checkout[2]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user05.png',

    'offer': ['title[4]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[0]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[2]', 'checkout[0]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user06.png',

    'offer': ['title[5]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[1]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[0]', 'checkout[0]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user07.png',

    'offer': ['title[6]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[2]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[1]', 'checkout[0]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  },
  {
    'author': 'img/avatars/user08.png',

    'offer': ['title[7]', 'address: location.x, location.y', 'price[Math.random() * 1000]', 'type[3]', 'rooms[Math.floor(Math.random() * rooms.length)]', 'guests[Math.floor(Math.random() * 10)]', 'checkin[2]', 'checkout[1]', 'features[Math.floor(Math.random() * rooms.length)]', 'description', 'photos[]'],

    'location': ['x = Math.floor(Math.random() * 10)', 'y = Math.floor(Math.random() * 10)']
  }
];


var turnMap = document.querySelector('.map');
turnMap.classList.remove('map--faded');

var template = document.querySelector('template').content.querySelector('.map__pin');

var mapPins = document.querySelector('.map__pins');

for (var i = 0; i < usersAds.length; i++) {
  var userElement = template.cloneNode(true);

  userElement.querySelector('.map__pin').setAttribute = usersAds[i].location;

  userElement.querySelector('.map__pin').setAttribute = usersAds[i].author;

  userElement.querySelector('.map__pin').setAttribute = usersAds[i].title;

  mapPins.appendChild(userElement);

}
