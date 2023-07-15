const getRandomNumb = (min, max, numbAfter) => {
  if(min >= 0 && max >= 0) {
    const randomNumb = Math.random() * (max - min) + min;
    return Number(randomNumb.toFixed(numbAfter));
  } else {
    return NaN;
  }
};
getRandomNumb(10,50,4);


const genRandomNumb = (min, max) => {
  const randomNumb = Math.random() * (max - min) + min;
  const randomN = Math.ceil(randomNumb);
  return String(randomN).padStart(2, '0');
};


function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}


const genAr = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    const rundomObj = {
      author: {
        avatar: `img/avatars/user${ genRandomNumb(1,10) }.png`
      },
      offer: {
        title: 'title',
        address:  `${getRandomNumb(35.65,35.7,5)} - ${getRandomNumb(139.7,139.8,5)}`,
        price: Number(genRandomNumb(1,9)),
        type: arrayRandElement(['palace', 'flat', 'house', 'bungalow', 'hotel']),
        rooms:  Number(genRandomNumb(1,9)),
        guests:  Number(genRandomNumb(1,9)),
        checkout: arrayRandElement(['12:00', '13:00', '14:00']),
        features: arrayRandElement(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
        description: 'помещение огонь',
        photos: arrayRandElement(['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',' https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',' https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']),
        location: {
          lat: getRandomNumb(35.65,35.7,5),
          lng: getRandomNumb(139.7,139.8,5)
        }
      }
    };
    const arrAnnouncement = [rundomObj];
    console.log (arrAnnouncement);
  }
};
genAr(3);
