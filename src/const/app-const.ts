const AppSetting = {
  QuestsCount: 11,
  ReservationsCount: 3,
};

const BackgroundSetting = {
  Original: 768,
  Blur: 1959,
} as const;

// const QUESTS = [
//   'Склеп',
//   'Маньяк',
//   'Ритуал',
//   'История призраков',
//   'Тайны старого ососбняка',
//   'Хижина в лесу',
//   'Фатальный эксперимент',
//   'Метро 2033',
//   'Старый чердак',
//   'Последний рубеж',
//   'Марс-2056',
// ];

const enum GeneralNavItem {
  Auth = 3,
  NoAuth = 2,
}

const QuestType = {
  All: {
    label: 'Все квесты',
    icon: 'all-quests',
    iconSize: [26, 30],
  },
  Adventure: {
    label: 'Приключения',
    icon: 'adventure',
    iconSize: [36, 30],
  },
  Horror: {
    label: 'Ужасы',
    icon: 'horror',
    iconSize: [30, 30],
  },
  Mystic: {
    label: 'Мистика',
    icon: 'mystic',
    iconSize: [30, 30],
  },
  Detective: {
    label: 'Детектив',
    icon: 'detective',
    iconSize: [40, 30],
  },
  SciFi: {
    label: 'Sci-fi',
    icon: 'sci-fi',
    iconSize: [28, 30],
  },
} as const;

// const QuestComplexity = {
//   All: {
//     label: 'Все квесты',
//     icon: 'all-quests',
//     iconSize: [26, 30],
//   },
// } as const;

const MapSetting = {
  MapUrl:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  MapCopyright:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  Markers: {
    DefaultMarker: '../../public/img/svg/pin-default.svg',
    ActiveMarker: '../../public/img/svg/pin-active.svg',
  },
  Zoom: 15.4,
} as const;

enum SliceName {
  Quest = 'quest',
  Booking = 'booking',
  User = 'user',
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
  Logout = '/logout',
}

const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

enum AppRoute {
  Home = '/',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
}

export {
  AppSetting,
  BackgroundSetting,
  QuestType,
  GeneralNavItem,
  SliceName,
  RequestStatus,
  APIRoute,
  AuthStatus,
  AppRoute,
  MapSetting,
};
