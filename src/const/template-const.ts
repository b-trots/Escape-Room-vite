const GeneralNav = {
  Home: 'Квесты',
  Contacts: 'Контакты',
  MyQuests: 'Мои бронирования',
};

const LOADING = 'Loading...';

const OrganizationContact = {
  Address: ['Адрес', 'Санкт-Петербург, Набережная реки Карповка, д 5П'],
  OpeningHours: ['Режим работы', 'Ежедневно, с 10:00 до 22:00'],
  Phone: ['Телефон', '8 (000) 111-11-11'],
  Email: ['E–mail', 'info@escape-room.ru'],
  Coords: [59.970348, 30.316003],
};

const OrganizationContactKeys = Object.keys(OrganizationContact);

const UserDataForBooking = {
  Name: {
    label: 'Ваше имя',
    type: 'text',
    id: 'name',
    name: 'name',
    placeholder: 'Имя',
    pattern: '^[a-zA-Z0-9]{1,15}$',
    error: 'Имя может содержать только буквы и цифры, не более 15 символов',
  },
  Tel: {
    label: 'Контактный телефон',
    type: 'tel',
    id: 'tel',
    name: 'tel',
    placeholder: 'Телефон',
    // pattern:
    //   '(?:([+]d{1,4})[-.s]?)?(?:[(](d{1,3})[)][-.s]?)?(d{1,4})[-.s]?(d{1,4})[-.s]?(d{1,9})',
    error: 'Введите телефон в формате: +7 (123) 456-78-90',
  },
  Person: {
    label: 'Количество участников',
    type: 'number',
    id: 'person',
    name: 'person',
    placeholder: 'Количество участников',
  },
};

const UserDataForLogin = {
  Email: {
    label: 'E – mail',
    type: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'Адрес электронной почты',
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.+.[a-zA-Z]{2,4}$',
    error: 'Введите e-mail в формате: example@example.com',
  },
  Password: {
    label: 'Пароль',
    type: 'password',
    id: 'password',
    name: 'password',
    placeholder: 'Пароль',
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?!.* ).{3,15}$',
    error: 'От 3 до 15 символов, минимум 1 буква, минимум 1 цифра',
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

const BemBlock = {
  Map: {
    Contacts: 'contacts__',
    Booking: 'booking-',
  },
} as const;

enum Checkbox {
  Children = 'Со мной будут дети',
}

enum Contact {
  Hotline = '8 (000) 111-11-11',
}

enum ActionButton {
  Booking = 'Забронировать',
  Login = 'Войти',
  Cancel = 'Отменить',
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
  Quest = 'Выберите квест'
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
  BemBlock,
  LOADING,
};
