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
  'Марс-2056',
];

const FILTER_BY_TOPIC = [
  'all',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sciFi',
] as const;
const FILTER_BY_COMPLEXITY = ['any', 'easy', 'middle', 'hard'] as const;

enum QuestLevel {
  Any = 'Любой',
  Easy = 'Лёгкий',
  Middle = 'Средний',
  Hard = 'Сложный',
}

enum QuestType {
  All = 'Все квесты',
  Adventure = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

enum QuestLevelIcon {
  All = 'all-quests',
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
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
  QuestsCount: 11,
  ReservationsCount: 3,
};

export {
  QUESTS,
  FILTER_BY_TOPIC,
  FILTER_BY_COMPLEXITY,
  QuestLevel,
  QuestType,
  QuestLevelIcon,
  Contact,
  QuestDate,
  GeneralNavItem,
  AuthStatus,
  AppRoute,
  GeneralNav,
  Setting,
};
