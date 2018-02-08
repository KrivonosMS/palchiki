'use strict';

(function () {
  var MEETINGS = [
    {
      name: 'Лепка из глины "Новогодний подсвечник"',
      date: '17 января',
      coast: '500 рублей',
      description: 'Познакомимся с замечательным материалом - полимерной глиной и попробуем его в работе слепим из глины и соберём лепесток за лепестком новогодний цветок - пуансетию слепим ёлочный блестящий шарик задекорируем подсвечник искусственными ягодами и еловыми веточками. В результате каждый получит и заберёт с собой красивый подсвечник, который украсит интерьер или станет волшебным рождественским подарком.',
      image: 'images/MK1.png'
    },
    {
      name: 'Лепка из глины "Новогодний набор"',
      date: '19 декабря',
      coast: '1500 рублей',
      description: 'На уроке слепим с вами Дедушку Мороза🎅🏻 и снеговика☃️ из полимерной глины. Наши изделия украсят чайную ложку и вилку🍴, которые мы упакуем в праздничную упаковку.',
      image: 'images/MK2.png'
    },
    {
      name: 'Декорирование "Баночка со сладостями"',
      date: '29 февраля',
      coast: '700 рублей',
      description: 'Приглашаем деток в возрасте от 5 лет. На МК мы слепим и сладости из глины и украсим этими вкусняшками баночку, в которой можно хранить сахар, конфетки или разные приятные мелочи🍬🎀🍭💍. Возможно участие вместе с мамой от 3 лет.',
      image: 'images/MK3.png'
    }];

  function cloneMeeting() {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MEETINGS.length; i++) {
      var meetingElement = meetingTemplate.cloneNode(true);// клонируем шаблон (встречи)
      meetingElement.querySelector('#lineFirst').textContent = MEETINGS[i].name;
      meetingElement.querySelector('#lineSecond').textContent = MEETINGS[i].date;
      meetingElement.querySelector('#lineThird').textContent = MEETINGS[i].coast;
      meetingElement.querySelector('#lineFourth').textContent = MEETINGS[i].description;
      meetingElement.querySelector('.forecast_image img').src = MEETINGS[i].image;
      fragment.appendChild(meetingElement);
    }
    similarMeetingElement.appendChild(fragment);
  }

  var meetingTemplate = document.querySelector('#meetingTemplate').content; // шаблон, который мы хотим клонировать
  var similarMeetingElement = document.querySelector('#meetingList'); // обращаемся к элементу, в котором будут все склонированные копии
  cloneMeeting();
})();
