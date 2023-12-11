import Block from '../../utils/Block';
import './my-message.css';
import template from './my-message.hbs';
import AvatarChat from '../AvatarChat';

interface MyMessageProps {
  content: string,
  time: string,
  isread?: boolean,
  avatar: string,
  active: boolean,
}

export default class MyMessage extends Block {
  constructor(props: MyMessageProps) {
    super(props);
  }

  init() {
    this.children.avatarMyImage = new AvatarChat({
      avatar: this.props.avatar,
      active: this.props.active,
      // avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // active: true,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
