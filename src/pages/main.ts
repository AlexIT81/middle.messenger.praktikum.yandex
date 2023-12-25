import '../styles/style.css';
import render from '../utils/render';
import router from '../utils/Router';
import Login from './login';
import Register from './register';
import Error404 from './404';
import Error500 from './500';
import Profile from './profile';
import Chat from './chat';
import ProfileEdit from './profile_edit';
import ProfileEditPassword from './profile_edit_password';
import { setFormValid } from '../utils/validation';

window.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', Login)
    .use('/sign-up', Register)
    .use('/404', Error404)
    .use('/500', Error500)
    .use('/settings-edit', ProfileEdit)
    .use('/settings-edit-password', ProfileEditPassword)
    .use('/settings', Profile)
    .use('/messenger', Chat);

  router.start();
  // У всех страниц должен быть собственный роут:
  // / — страница входа,
  // /sign-up — страница регистрации,
  // /settings — настройки профиля пользователя,
  // /messenger — чат.

  const buttonProfile = document.querySelector('.footer-aside__profile-btn') as HTMLElement;
  if (buttonProfile) { buttonProfile.addEventListener('click', () => router.go('/settings')); }

  const buttonExit = document.querySelector('.footer-aside__exit-btn') as HTMLElement;
  if (buttonExit) { buttonExit.addEventListener('click', () => router.go('/')); }

  const buttonBurget = document.querySelector('.header-main__menu-button') as HTMLElement;
  const menuBurger = document.querySelector('.menu-burger') as HTMLElement;
  if (buttonBurget) {
    buttonBurget.addEventListener('click', () => {
      menuBurger.classList.toggle('menu-visible');
    });
  }

  const buttonAttach = document.querySelector('.footer-main__attach-btn') as HTMLElement;
  const menuAttach = document.querySelector('.menu-attach') as HTMLElement;
  if (buttonAttach) {
    buttonAttach.addEventListener('click', () => {
      menuAttach.classList.toggle('menu-visible');
    });
  }

  const buttonMessageSubmit = document.querySelector('.footer-main__send-btn') as HTMLButtonElement;
  if (buttonMessageSubmit) {
    buttonMessageSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const currentForm = buttonMessageSubmit.closest('form') as HTMLFormElement;
      const isFormValid = setFormValid(currentForm);
      if (isFormValid) {
        currentForm.reset();
      }
    });
  }

  // Бургер меню, попапы пока не компоненты
  const buttonAddUser = document.querySelector('.menu-burger__link_add');
  const popupAddUser = document.querySelector('#add-user') as HTMLDivElement;
  if (buttonAddUser) {
    buttonAddUser.addEventListener('click', () => {
      if (popupAddUser) popupAddUser.classList.add('popup_opened');
      popupAddUser.addEventListener('click', (e) => {
        const eventTarget = e.target as HTMLElement;
        if (eventTarget.classList.contains('popup_opened')) popupAddUser.classList.remove('popup_opened');
      });
    });
  }

  const buttonRemoveUser = document.querySelector('.menu-burger__link_delete');
  const popupRemoveUser = document.querySelector('#remove-user') as HTMLDivElement;
  if (buttonRemoveUser) {
    buttonRemoveUser.addEventListener('click', () => {
      if (popupRemoveUser) popupRemoveUser.classList.add('popup_opened');
      popupRemoveUser.addEventListener('click', (e) => {
        const eventTarget = e.target as HTMLElement;
        if (eventTarget.classList.contains('popup_opened')) popupRemoveUser.classList.remove('popup_opened');
      });
    });
  }
});
