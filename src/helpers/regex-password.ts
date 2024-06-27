const password =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export const RegExHelper = {
  password
};

export const MessagesHelper = {
    PASSWORD_VALID:
      'A senha deve conter letras maiúsculas minúsculas, números e caracteres especiais',
    PASSWORD_OR_EMAIL_INVALID: 'E-mail e/ou senha são inválidos',
  };