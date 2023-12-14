import './input-text.css';
import Block from '../../utils/Block';
import template from './input-text.hbs';

interface InputTextProps {
  placeholder: string,
  name: string,
  error?: string,
  onBlur?: (e: Event) => void,
  onFocus?: (e: Event) => void,
  events?: {
    focusin: () => void,
    focusout: () => void,
  }
}

export default class InputText extends Block {
  constructor(props: InputTextProps) {
    super({
      ...props,
      events: { focusin: props.onFocus, focusout: props.onBlur },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
