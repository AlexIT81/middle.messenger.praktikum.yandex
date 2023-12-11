import '../../styles/profile.css';
import Block from '../../utils/Block';
import template from './profile_edit.hbs';
import AvatarProfile from '../../components/AvatarProfile';
import Title from '../../components/Title';
import InputProfile from '../../components/InputProfile';
import ButtonNav from '../../components/ButtonNav';
import Button from '../../components/Button';
import render from '../../utils/render';

export default class ProfileEdit extends Block {
  init() {
    this.children.avatarProfile = new AvatarProfile({
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Аватарка пользователя',
    });

    this.children.title = new Title({
      text: 'Ivan Ivanov',
    });

    this.children.inputEmail = new InputProfile({
      label: 'Почта',
      placeholder: 'email',
      name: 'email',
      type: 'email',
      value: 'example@ya.ru',
      disabled: false,
    });

    this.children.inputLogin = new InputProfile({
      label: 'Логин',
      placeholder: 'login',
      name: 'login',
      type: 'text',
      value: 'IvanIvanov',
      disabled: false,
    });

    this.children.inputName = new InputProfile({
      label: 'Имя',
      placeholder: 'first_name',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
      disabled: false,
    });

    this.children.inputSecongName = new InputProfile({
      label: 'Фамилия',
      placeholder: 'second_name',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
      disabled: false,
    });

    this.children.inputChatName = new InputProfile({
      label: 'Имя в чате',
      placeholder: 'display_name',
      name: 'display_name',
      type: 'text',
      value: 'Ivan Ivanov',
      disabled: false,
    });

    this.children.inputPhone = new InputProfile({
      label: 'Телефон',
      placeholder: 'phone',
      name: 'phone',
      type: 'tel',
      value: '+7(123)456-78-90',
      disabled: false,
    });

    this.children.buttonSubmit = new Button({
      label: 'Сохранить',
      type: 'submit',
      onClick: (e) => {
        e.preventDefault();
        console.log('submit');
      },
    });

    this.children.buttonExit = new ButtonNav({
      label: 'Выйти',
      type: 'button',
      warning: true,
      onClick: () => {
        render('profile');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
