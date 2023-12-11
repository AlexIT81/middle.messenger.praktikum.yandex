import Error404 from '../pages/404';
import Error500 from '../pages/500';
import Login from '../pages/login';
import Register from '../pages/register';
import Profile from '../pages/profile';
import ProfileEdit from '../pages/profile_edit';
import ProfileEditPassword from '../pages/profile_edit_password';
import Chat from '../pages/chat';

const ROUTES = {
  error404: Error404,
  error500: Error500,
  login: Login,
  register: Register,
  profile: Profile,
  profileEdit: ProfileEdit,
  profileEditPassword: ProfileEditPassword,
  chat: Chat,
};

export default function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';
  const Page = ROUTES[name];
  const page = new Page({ title: name });
  root.append(page.getContent()!);
  page.dispatchComponentDidMount();

  // Временные обработчики событий
  // @ts-ignore
  if (page.props.title === 'chat') {
    const buttonProfile = document.querySelector('.footer-aside__profile-btn') as HTMLElement;
    if (buttonProfile) { buttonProfile.addEventListener('click', () => render('profile')); }

    const buttonExit = document.querySelector('.footer-aside__exit-btn') as HTMLElement;
    if (buttonExit) { buttonExit.addEventListener('click', () => render('login')); }

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
  }
}
