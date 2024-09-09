enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

enum QuestDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
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
};

export {
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
