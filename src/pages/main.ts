import '../styles/style.css';
import render from '../utils/render';

window.addEventListener('DOMContentLoaded', () => {
  const tempMenu = document.createElement('nav');
  tempMenu.classList.add('temp-menu');
  tempMenu.innerHTML = `
  <ul class="temp-menu__list">
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="p404">404</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="p500">500</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="login">Логин</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="register">Регистрация</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="profile">Профайл</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="profile-edit">Профайл редактирование профиля</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="profile-edit-password">Профайл сменить пароль</button></li>
    <li class="temp-menu__list-item"><button class="temp-menu__button btn-link" type="button" id="chat">Чат</button></button></li>
  </ul>
  `;
  const root = document.querySelector('#nav');
  root!.appendChild(tempMenu);

  const page404 = document.querySelector('#p404');
  page404!.addEventListener('click', () => {
    render('error404');
  });

  const page500 = document.querySelector('#p500');
  page500!.addEventListener('click', () => {
    render('error500');
  });

  const login = document.querySelector('#login');
  login!.addEventListener('click', () => {
    render('login');
  });

  const register = document.querySelector('#register');
  register!.addEventListener('click', () => {
    render('register');
  });

  const profile = document.querySelector('#profile');
  profile!.addEventListener('click', () => {
    render('profile');
  });

  const profileEdit = document.querySelector('#profile-edit');
  profileEdit!.addEventListener('click', () => {
    render('profileEdit');
  });

  const profileEditPassword = document.querySelector('#profile-edit-password');
  profileEditPassword!.addEventListener('click', () => {
    render('profileEditPassword');
  });

  const chat = document.querySelector('#chat');
  chat!.addEventListener('click', () => {
    render('chat');
  });

  render('profile');
});
