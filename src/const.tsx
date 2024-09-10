const QUESTS = [
  'Склеп',
  'Маньяк',
  'Ритуал',
  'История призраков',
  'Тайны старого ососбняка',
  'Хижина в лесу',
  'Фатальный эксперимент',
  'Метро 2033',
  'Старый чердак',
  'Последний рубеж',
  'Марс-2056'
];

enum QuestLevel {
  Easy = 'лёгкий',
  Medium = 'средний',
  Hard = 'сложный',
}


enum QuestType {
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

enum QuestDate {
  Today = 'сегодня',
  Tomorrow = 'завтра',
}

enum Contact {
  Hotline = '8 (000) 111-11-11',
}

const enum GeneralNavItem {
  Auth = 3,
  NoAuth = 2,
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum AppRoute {
  Home = '/',
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
}

const GeneralNav = {
  Home: 'Квесты',
  Contacts: 'Контакты',
  MyQuests: 'Мои бронирования',
};

const Setting = {
  authStatus: AuthStatus.Auth,
  QuestsCount: 11
};


export {
  QUESTS,
  QuestLevel,
  QuestType,
  Contact,
  QuestDate,
  GeneralNavItem,
  AuthStatus,
  AppRoute,
  GeneralNav,
  Setting,
};
