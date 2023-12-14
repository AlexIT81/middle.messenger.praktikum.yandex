import './error.css';
import template from './error.hbs';
import Block from '../../utils/Block';

interface ErrorProps {
  title: string,
  text: string,
}

export default class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
