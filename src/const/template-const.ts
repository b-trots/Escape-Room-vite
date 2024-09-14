const GeneralNav = {
  Home: 'Квесты',
  Contacts: 'Контакты',
  MyQuests: 'Мои бронирования',
};

const OrganizationContact = {
  Address: ['Адрес', 'Санкт-Петербург, Набережная реки Карповка, д 5П'],
  OpeningHours: ['Режим работы', 'Ежедневно, с 10:00 до 22:00'],
  Phone: ['Телефон', '8 (000) 111-11-11'],
  Email: ['E–mail', 'info@escape-room.ru'],
};

const OrganizationContactKeys = Object.keys(OrganizationContact);

const UserDataForBooking = {
  Name: {
    label: 'Ваше имя',
    type: 'text',
    id: 'name',
    name: 'name',
    placeholder: 'Имя',
    pattern: `[А-Яа-яЁёA-Za-z'- ]{1,}`,
  },
  Tel: {
    label: 'Контактный телефон',
    type: 'tel',
    id: 'tel',
    name: 'tel',
    placeholder: 'Телефон',
    pattern: `[0-9]{10,}`,
  },
  Person: {
    label: 'Количество участников',
    type: 'number',
    id: 'person',
    name: 'person',
    placeholder: 'Количество участников',
    pattern: `[0-9]{10,}`,
  },
};

const UserDataForLogin = {
  email: {
    label: 'E – mail',
    type: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'Адрес электронной почты',
    pattern: '^S+@S+.S+$',
  },
  password: {
    label: 'Пароль',
    type: 'password',
    id: 'password',
    name: 'password',
    placeholder: 'Пароль',
    pattern: '(?=.*d)(?=.*[a-zA-Z]).{2,}',
  },
};

const QUEST_DATE = ['сегодня', 'завтра'];

const QuestDate = {
  Today: 'сегодня',
  Tomorrow: 'завтра',
} as const;

const QUEST_LEVEL = ['easy', 'medium', 'hard'];
const QUEST_TYPE = ['adventures', 'horror', 'mystic', 'detective', 'sci-fi'];
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

enum FilterName {
  Topic = 'Темматика',
  Complexity = 'Сложность',
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

export {
  GeneralNav,
  OrganizationContact,
  OrganizationContactKeys,
  UserDataForBooking,
  UserDataForLogin,
  QUEST_DATE,
  QuestDate,
  QUEST_LEVEL,
  QUEST_TYPE,
  FILTER_BY_COMPLEXITY,
  FILTER_BY_TOPIC,
  QuestLevel,
  Checkbox,
  Contact,
  ActionButton,
  FilterName,
  PrivacyPolicyClass,
  TitleName,
  LoginLogoutButton,
  SubTitleName,
  LegendName,
  SelectedInfo,
  SocialApplication,
};
