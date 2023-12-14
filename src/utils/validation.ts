import validationData from './validationData';

const setBlurValid = (element: HTMLInputElement) => {
  let { name } = element;
  if (name === 'password_repeat' || name === 'oldPassword' || name === 'newPassword' || name === 'newPasswordRepeat') name = 'password';
  const { regex, errorMessage } = validationData[name];
  if (element.classList.contains('input-profile__inner')) {
    const errorContainer = element.parentElement!.nextElementSibling as HTMLElement;
    if (!regex.test(element.value)) {
      element.classList.add('input-profile__inner_error');
      errorContainer.innerText = errorMessage;
    }
  } else if (element.classList.contains('input-text')) {
    if (!regex.test(element.value)) {
      element.classList.add('input-text__inner_error');
    }
  } else {
    const errorContainer = element.nextElementSibling as HTMLElement;
    if (!regex.test(element.value)) {
      element.classList.add('input__inner_error');
      errorContainer.innerText = errorMessage;
    }
  }
};

const setFocusValid = (element: HTMLInputElement) => {
  if (element.classList.contains('input-profile__inner')) {
    const errorContainer = element.parentElement!.nextElementSibling as HTMLElement;
    if (element.classList.contains('input-profile__inner_error')) element.classList.remove('input-profile__inner_error');
    errorContainer.innerText = '';
  } else if (element.classList.contains('input-text')) {
    element.classList.remove('input-text__inner_error');
    if (element.classList.contains('input-text__inner_error')) element.classList.remove('input-text__inner_error');
  } else {
    const errorContainer = element.nextElementSibling as HTMLElement;
    if (element.classList.contains('input__inner_error')) element.classList.remove('input__inner_error');
    errorContainer.innerText = '';
  }
};

const setFormValid = (form: HTMLFormElement) => {
  // Подсветка ошибок
  const inputs = form.querySelectorAll('input');
  [...inputs].forEach((input) => {
    let { name } = input;
    if (name === 'password_repeat' || name === 'oldPassword' || name === 'newPassword' || name === 'newPasswordRepeat') {
      name = 'password';
    }

    if (input.classList.contains('input-profile__inner')) {
      const errorContainer = input.parentElement!.nextElementSibling as HTMLElement;
      if (!validationData[name].regex.test(input.value)) {
        input.classList.add('input-profile__inner_error');
        errorContainer.innerText = validationData[name].errorMessage;
      }
    } else if (input.classList.contains('input-text')) {
      if (!validationData[name].regex.test(input.value)) {
        input.classList.add('input-text__inner_error');
      }
    } else {
      const errorContainer = input.nextElementSibling as HTMLElement;
      if (!validationData[name].regex.test(input.value)) {
        input.classList.add('input__inner_error');
        errorContainer.innerText = validationData[name].errorMessage;
      }
    }
  });

  // Проверка совпадения паролей
  // const checkPassword = () => {
  //   const password = [...inputs].filter((input) => input.name === 'password')[0];
  //   const passwordRepeated = [...inputs].filter((input) => input.name === 'password_repeat')[0];
  //   let isMatch: boolean;
  //   if (password.value !== passwordRepeated.value) {
  //     const errorContainer = passwordRepeated.nextElementSibling as HTMLElement;
  //     passwordRepeated.classList.add('input__inner_error');
  //     errorContainer.innerText = 'Пароли не совпадают!';
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // Проверка валидности всех полей
  const isInputsValid = [...inputs].every((input) => {
    let { name } = input;
    if (name === 'password_repeat' || name === 'oldPassword' || name === 'newPassword' || name === 'newPasswordRepeat') name = 'password';
    const { regex } = validationData[name];
    const isInputValid = regex.test(input.value);
    return isInputValid;
  });

  return isInputsValid;
};

export { setBlurValid, setFocusValid, setFormValid };
