import '../../styles/login.css';
import Block from '../../utils/Block';
import template from './login.hbs';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonNav from '../../components/ButtonNav';
import render from '../../utils/render';
import validationData from '../../utils/validation';

export default class Login extends Block {
  private _blurValid(element: HTMLInputElement, message: string, regex: RegExp): void {
    const errorContainer = element.nextElementSibling as HTMLElement;
    if (!regex.test(element.value)) {
      element.classList.add('input__inner_error');
      errorContainer.innerText = message;
    }
  }

  private _focusValid(element: HTMLInputElement): void {
    const errorContainer = element.nextElementSibling as HTMLElement;
    if (element.classList.contains('input__inner_error')) element.classList.remove('input__inner_error');
    errorContainer.innerText = '';
  }

  init() {
    this.children.inputLogin = new Input({
      label: 'Логин',
      placeholder: 'login',
      name: 'login',
      type: 'text',
      onBlur: (e) => {
        const input = e.target as HTMLInputElement;
        this._blurValid(input, validationData.login.errorMessage, validationData.login.regex);
      },
      onFocus: (e) => {
        const input = e.target as HTMLInputElement;
        this._focusValid(input);
      },
    });

    this.children.inputPassword = new Input({
      label: 'Пароль',
      placeholder: 'password',
      name: 'password',
      type: 'password',
      onBlur: (e) => {
        const input = e.target as HTMLInputElement;
        this._blurValid(input, validationData.password.errorMessage, validationData.password.regex);
      },
      onFocus: (e) => {
        const input = e.target as HTMLInputElement;
        this._focusValid(input);
      },
    });

    this.children.button = new Button({
      label: 'Войти',
      type: 'submit',
      onClick: () => {
        console.log('submit');
      },
    });

    this.children.buttonRegister = new ButtonNav({
      label: 'Нет аккаунта?',
      type: 'button',
      onClick: () => {
        render('register');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
