import './input-profile.css';
import Block from '../../utils/Block';
import template from './input-profile.hbs';

interface InputProfileProps {
  label: string,
  placeholder: string,
  name: string,
  type: string,
  error?: string,
  value?: string,
  disabled?: boolean,
  onBlur?: () => void;
  events?: {
    blur: () => void;
  }
}

export default class InputProfile extends Block {
  constructor(props: InputProfileProps) {
    super({
      ...props,
      events: { blur: props.onBlur },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
