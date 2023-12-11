import '../../styles/register.css';
import Block from '../../utils/Block';
import template from './register.hbs';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonNav from '../../components/ButtonNav';
import render from '../../utils/render';

export default class Register extends Block {
  init() {
    this.children.inputEmail = new Input({
      label: 'Почта',
      placeholder: 'email',
      name: 'email',
      type: 'email',
    });

    this.children.inputLogin = new Input({
      label: 'Логин',
      placeholder: 'login',
      name: 'login',
      type: 'text',
    });

    this.children.inputFirstName = new Input({
      label: 'Имя',
      placeholder: 'first_name',
      name: 'first_name',
      type: 'text',
    });

    this.children.inputSecondName = new Input({
      label: 'Фамилия',
      placeholder: 'second_name',
      name: 'second_name',
      type: 'text',
    });

    this.children.inputPhone = new Input({
      label: 'Телефон',
      placeholder: 'phone',
      name: 'phone',
      type: 'tel',
    });

    this.children.inputPassword = new Input({
      label: 'Пароль',
      placeholder: 'password',
      name: 'password',
      type: 'password',
    });

    this.children.inputPasswordRepeat = new Input({
      label: 'Пароль (ёще раз)',
      placeholder: 'password',
      name: 'password_repeat',
      type: 'password',
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      type: 'submit',
      disabled: false,
      onClick: () => {
        console.log('submit');
      },
    });

    this.children.buttonLogin = new ButtonNav({
      label: 'Войти?',
      type: 'button',
      onClick: () => {
        render('login');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
