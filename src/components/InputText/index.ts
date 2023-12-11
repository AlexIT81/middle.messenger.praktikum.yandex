import './input-text.css';
import Block from '../../utils/Block';
import template from './input-text.hbs';

interface InputTextProps {
  placeholder: string,
  name: string,
  error?: string,
  onBlur?: () => void;
  events?: {
    blur: () => void;
  }
}

export default class InputText extends Block {
  constructor(props: InputTextProps) {
    super({
      ...props,
      events: { blur: props.onBlur },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
