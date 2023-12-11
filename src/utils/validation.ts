const validationData = {
  login: {
    regex: /^[a-zA-Z0-9_-]{3,20}$/,
    errorMessage: 'Латиница буквы и цифры, _ и -, 3-20 символов. ',
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMessage: 'Заглавная буква и цифра, 8-40 символов',
  },
};

export default validationData;
