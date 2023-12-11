import Block from '../../utils/Block';
import './message.css';
import template from './message.hbs';
import AvatarChat from '../AvatarChat';

interface MessageProps {
  username: string,
  content: string,
  time: string,
  avatar: string,
  active: boolean,
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  init() {
    this.children.avatarImage = new AvatarChat({
      avatar: this.props.avatar,
      active: this.props.active,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
