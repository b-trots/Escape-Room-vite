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
  Contact = 'Контакты',
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
  Contact = 'Контактная информация',
}

enum SelectedInfo {
  Address = 'Вы выбрали: ',
  Genre = 'Жанр:',
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
};
