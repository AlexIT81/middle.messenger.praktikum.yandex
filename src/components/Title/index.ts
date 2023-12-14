import './title.css';
import Block from '../../utils/Block';
import template from './title.hbs';

interface TitleProps {
  text: string,
  error?: boolean,
}

export default class Title extends Block {
  constructor(props: TitleProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
