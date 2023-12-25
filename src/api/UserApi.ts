import HTTPTransport from '../utils/fetch';
import BaseAPI from '../utils/BaseApi';

const userAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2');

export default class UserApi extends BaseAPI {
  // eslint-disable-next-line
  signUpRequest(first_name: string, second_name: string, login: string, email, password, phone) {
    // eslint-disable-next-line
    return userAPIInstance.post('/auth/signup', {first_name, second_name, login, email, password, phone});
  }

  request() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return userAPIInstance.get("/full");
  }
}
