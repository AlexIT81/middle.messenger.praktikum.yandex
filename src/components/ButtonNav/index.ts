import './button-nav.css';
import Block from '../../utils/Block';
import template from './button-nav.hbs';

interface ButtonNavProps {
  label: string,
  type: 'submit' | 'button',
  warning?: boolean,
  onClick?: (e: Event) => void;
  events?: {
    click: () => void;
  }
}

export default class ButtonNav extends Block {
  constructor(props: ButtonNavProps) {
    super({
      ...props,
      events: { click: props.onClick },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
