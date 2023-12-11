import './avatar-chat.css';
import Block from '../../utils/Block';
import template from './avatar-chat.hbs';

interface AvatarChatProps {
  avatar: string,
  active: boolean,
}

export default class AvatarChat extends Block {
  constructor(props: AvatarChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
