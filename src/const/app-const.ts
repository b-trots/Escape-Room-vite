enum Checkbox {
  Children = 'Со мной будут дети',
}

enum Contact {
  Hotline = '8 (000) 111-11-11',
}

enum ActionButton {
  Booking = 'Забронировать',
  Login = 'Войти',
}

enum PrivacyPolicyClass {
  Login = 'login-form__checkbox',
  Booking = 'booking-form__checkbox booking-form__checkbox--agreement',
}

enum TitleName {
  Home = 'Выберите тематику',
  Login = 'Вход',
  Booking = 'Бронирование квеста',
  ContactInfo = 'Контакты',
  MyQuests = 'Мои бронирования',
}

enum LoginLogoutButton {
  Login = 'Вход',
  Logout = 'Выйти',
}

enum SubTitleName {
  Home = 'квесты в Санкт-Петербурге',
}

enum LegendName {
  SelectDate = 'Выбор даты и времени',
  ContactInfo = 'Контактная информация',
}

enum SelectedInfo {
  Address = 'Вы выбрали: ',
  Genre = 'Жанр:',
}

const SocialApplication = {
  Skype: {
    id: 'skype',
    label: 'Skype',
  },
  Vk: {
    id: 'vk',
    label: 'ВКонтакте',
  },
} as const;

const MapSetting = {
  MapUrl:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  MapCopyright:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  Markers: {
    DefaultMarker: '../public/img/svg/pin-default.svg',
    ActiveMarker: '../public/img/svg/pin-active.svg',
  },
  Zoom: 5,
} as const;

enum SliceName {
  Quest = 'quest',
  Booking = 'booking',
  User = 'user'
}

enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

enum APIRoute {
  Quest = '/quest',
  Booking = '/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout'
}

export {
  Checkbox,
  ActionButton,
  PrivacyPolicyClass,
  Contact,
  TitleName,
  SubTitleName,
  LegendName,
  SelectedInfo,
  LoginLogoutButton,
  SocialApplication,
  MapSetting,
  SliceName,
  RequestStatus,
  APIRoute,
};
