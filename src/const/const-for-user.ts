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

export { UserDataForBooking, UserDataForLogin };
