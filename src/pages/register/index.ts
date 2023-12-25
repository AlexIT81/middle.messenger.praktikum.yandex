import '../../styles/register.css';
import Block from '../../utils/Block';
import template from './register.hbs';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonNav from '../../components/ButtonNav';
import render from '../../utils/render';
import { setBlurValid, setFocusValid, setFormValid } from '../../utils/validation';
import getFormData from '../../utils/getFormData';
import router from '../../utils/Router';

export default class Register extends Block {
  init() {
    this.children.inputEmail = new Input({
      label: 'Почта',
      placeholder: 'email',
      name: 'email',
      type: 'email',
      onBlur: (e) => {
        const input = e.target as HTMLInputElement;
        setBlurValid(input);
      },
      onFocus: (e) => {
        const input = e.target as HTMLInputElement;
        setFocusValid(input);
      },
    });

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

    this.children.inputFirstName = new Input({
      label: 'Имя',
      placeholder: 'first_name',
      name: 'first_name',
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

    this.children.inputSecondName = new Input({
      label: 'Фамилия',
      placeholder: 'second_name',
      name: 'second_name',
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

    this.children.inputPhone = new Input({
      label: 'Телефон',
      placeholder: 'phone',
      name: 'phone',
      type: 'tel',
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

    this.children.inputPasswordRepeat = new Input({
      label: 'Пароль (ёще раз)',
      placeholder: 'password',
      name: 'password_repeat',
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
      label: 'Зарегистрироваться',
      type: 'submit',
      disabled: false,
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

    this.children.buttonLogin = new ButtonNav({
      label: 'Войти?',
      type: 'button',
      onClick: () => {
        router.go('/');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
