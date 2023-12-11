import Block from '../../utils/Block';
import './chat-preview.css';
import template from './chat-preview.hbs';
import AvatarChat from '../AvatarChat';

interface ChatPreviewProps {
  avatar: string,
  active?: boolean,
  username: string,
  lastmsg: string,
  time: string,
  unread?: number,
}

export default class ChatPreview extends Block {
  constructor(props: ChatPreviewProps) {
    super(props);
  }

  // init() {
  //   this.children.avatarImage = new AvatarChat({
  //     avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  //     active: true,
  //   });
  // }

  render() {
    return this.compile(template, this.props);
  }
}
