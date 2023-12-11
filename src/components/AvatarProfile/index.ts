import './avatar-profile.css';
import Block from '../../utils/Block';
import template from './avatar-profile.hbs';

interface AvatarProfileProps {
  avatar?: string,
  alt?: string,
  onClick?: (e: Event) => any;
  events?: {
    click: () => void;
  }
}

export default class AvatarProfile extends Block {
  constructor(props: AvatarProfileProps) {
    super({
      ...props,
      events: { click: props.onClick },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
