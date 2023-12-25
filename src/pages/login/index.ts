import '../../styles/login.css';
import Block from '../../utils/Block';
import template from './login.hbs';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonNav from '../../components/ButtonNav';
import render from '../../utils/render';
import validationData from '../../utils/validationData';
import { setBlurValid, setFocusValid, setFormValid } from '../../utils/validation';
import getFormData from '../../utils/getFormData';
import router from '../../utils/Router';

export default class Login extends Block {
  init() {
    this.children.inputLogin = new Input({
      label: 'Логин',
      placeholder: 'login',
      name: 'login',
      type: 'text',
      onBlur: (e) => {
        const input = e.target as HTMLInputElement;
        setBlurValid(input);
      },
      onFocus: (e) => {
        const input = e.target as HTMLInputElement;
        setFocusValid(input);
      },
    });

    this.children.inputPassword = new Input({
      label: 'Пароль',
      placeholder: 'password',
      name: 'password',
      type: 'password',
      onBlur: (e) => {
        const input = e.target as HTMLInputElement;
        setBlurValid(input);
      },
      onFocus: (e) => {
        const input = e.target as HTMLInputElement;
        setFocusValid(input);
      },
    });

    this.children.button = new Button({
      label: 'Войти',
      type: 'submit',
      onClick: (e) => {
        e.preventDefault();
        const btn = e.target as HTMLElement;
        const currentForm = btn.closest('form') as HTMLFormElement;
        const isFormValid = setFormValid(currentForm);
        if (isFormValid) {
          getFormData(currentForm);
          currentForm.reset();
        }
      },
    });

    this.children.buttonRegister = new ButtonNav({
      label: 'Нет аккаунта?',
      type: 'button',
      onClick: () => {
        router.go('/sign-up');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
