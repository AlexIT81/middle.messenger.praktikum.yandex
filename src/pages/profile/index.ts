import '../../styles/profile.css';
import '../../styles/popup.css';
import Block from '../../utils/Block';
import template from './profile.hbs';
import AvatarProfile from '../../components/AvatarProfile';
import Title from '../../components/Title';
import InputProfile from '../../components/InputProfile';
import ButtonNav from '../../components/ButtonNav';
import render from '../../utils/render';
import Button from '../../components/Button';

export default class Profile extends Block {
  init() {
    this.children.avatarProfile = new AvatarProfile({
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Аватарка пользователя',
      onClick: () => {
        const popup = document.querySelector('.popup') as HTMLElement;
        popup.classList.add('popup_opened');

        const closePopup = (event: PointerEvent): void => {
          const element = event.target as HTMLElement;
          if (element.classList.contains('popup_opened')) {
            popup.classList.remove('popup_opened');
            popup.removeEventListener('click', closePopup);
          }
        };
        popup.addEventListener('click', closePopup);
      },
    });

    this.children.title = new Title({
      text: 'Иван Иванов',
    });

    this.children.inputEmail = new InputProfile({
      label: 'Почта',
      placeholder: 'email',
      name: 'email',
      type: 'email',
      value: 'example@ya.ru',
      disabled: true,
    });

    this.children.inputLogin = new InputProfile({
      label: 'Логин',
      placeholder: 'login',
      name: 'login',
      type: 'text',
      value: 'Ivan Ivanov',
      disabled: true,
    });

    this.children.inputName = new InputProfile({
      label: 'Имя',
      placeholder: 'first_name',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
      disabled: true,
    });

    this.children.inputSecongName = new InputProfile({
      label: 'Фамилия',
      placeholder: 'second_name',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
      disabled: true,
    });

    this.children.inputChatName = new InputProfile({
      label: 'Имя в чате',
      placeholder: 'display_name',
      name: 'display_name',
      type: 'text',
      value: 'Ivan_Ivanov',
      disabled: true,
    });

    this.children.inputPhone = new InputProfile({
      label: 'Телефон',
      placeholder: 'phone',
      name: 'phone',
      type: 'tel',
      value: '+7(123)456-78-90',
      disabled: true,
    });

    this.children.buttonEditData = new ButtonNav({
      label: 'Изменить данные',
      type: 'button',
      onClick: () => {
        render('profileEdit');
      },
    });

    this.children.buttonEditPassword = new ButtonNav({
      label: 'Изменить пароль',
      type: 'button',
      onClick: () => {
        render('profileEditPassword');
      },
    });

    this.children.buttonExit = new ButtonNav({
      label: 'Выйти',
      type: 'button',
      warning: true,
      onClick: () => {
        render('login');
      },
    });

    this.children.titlePopup = new Title({
      text: 'Загрузите файл',
    });

    this.children.buttonPopupSubmit = new Button({
      label: 'Изменить данные',
      type: 'submit',
      onClick: (e) => {
        e.preventDefault();
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
