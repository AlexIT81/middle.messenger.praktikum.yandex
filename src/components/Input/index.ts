import './input.css';
import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  label: string,
  placeholder: string,
  name: string,
  type: string,
  onBlur?: (e: Event) => void,
  onFocus?: (e: Event) => void,
  events?: {
    focusin: () => void,
    focusout: () => void,
  }
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: { focusin: props.onFocus, focusout: props.onBlur },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
