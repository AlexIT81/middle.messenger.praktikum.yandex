import Block from '../../utils/Block';
import template from './404.hbs';
import Error from '../../components/Error';

export default class Error404 extends Block {
  init() {
    this.children.error = new Error({
      title: '404',
      text: 'Не туда попали',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
