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


const QuestType = {
  All:{
    label: 'Все квесты',
    icon: 'all-quests',
    iconSize: [26, 30],
  },
  Adventure:{
    label: 'Приключения',
    icon: 'adventure',
    iconSize: [36, 30],
  },
  Horror:{
    label: 'Ужасы',
    icon: 'horror',
    iconSize: [30, 30],
  },
  Mystic:{
    label: 'Мистика',
    icon: 'mystic',
    iconSize: [30, 30],
  },
  Detective:{
    label: 'Детектив',
    icon: 'detective',
    iconSize: [40, 30],
  },
  SciFi:{
    label: 'Sci-fi',
    icon: 'sci-fi',
    iconSize: [28, 30],
  }
} as const;


enum QuestLevel {
  Any = 'Любой',
  Easy = 'Лёгкий',
  Middle = 'Средний',
  Hard = 'Сложный',
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
  Contact,
  QuestDate,
  GeneralNavItem,
  AuthStatus,
  AppRoute,
  GeneralNav,
  Setting,
};
