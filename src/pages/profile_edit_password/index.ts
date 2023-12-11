import '../../styles/profile.css';
import Block from '../../utils/Block';
import template from './profile_edit_password.hbs';
import AvatarProfile from '../../components/AvatarProfile';
import Title from '../../components/Title';
import InputProfile from '../../components/InputProfile';
import ButtonNav from '../../components/ButtonNav';
import Button from '../../components/Button';
import render from '../../utils/render';

export default class ProfileEditPassword extends Block {
  init() {
    this.children.avatarProfile = new AvatarProfile({
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Аватарка пользователя',
    });

    this.children.title = new Title({
      text: 'Ivan Ivanov',
    });

    this.children.inputPassword = new InputProfile({
      label: 'Текущий пароль',
      placeholder: 'oldPassword',
      name: 'oldPassword',
      type: 'password',
      value: '12345678',
      disabled: false,
    });

    this.children.inputNewPassword = new InputProfile({
      label: 'Новый пароль',
      placeholder: 'newPassword',
      name: 'newPassword',
      type: 'password',
      value: '12345678',
      disabled: false,
    });

    this.children.inputNewPasswordRepeat = new InputProfile({
      label: 'Повторите новый пароль',
      placeholder: 'newPassword',
      name: 'newPasswordRepeat',
      type: 'password',
      value: '12345678',
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
