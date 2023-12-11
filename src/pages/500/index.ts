import Block from '../../utils/Block';
import template from './500.hbs';
import Error from '../../components/Error';

export default class Error500 extends Block {
  init() {
    this.children.error = new Error({
      title: '505',
      text: 'Мы уже фиксим',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
