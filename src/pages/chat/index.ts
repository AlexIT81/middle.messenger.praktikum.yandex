import '../../styles/chat.css';
import Block from '../../utils/Block';
import template from './chat.hbs';
import render from '../../utils/render';
import InputText from '../../components/InputText';
import AvatarChat from '../../components/AvatarChat';
import ChatPreview from '../../components/ChatPreview';
import { chatPreviewData, messageData } from '../../data/chatData';
import MyMessage from '../../components/MyMessage';
import Message from '../../components/Message';

export default class Chat extends Block {
  init() {
    this.children.inputMessage = new InputText({
      placeholder: 'Введите&nbsp;сообщение...',
      name: 'message',
    });

    this.children.inputSearch = new InputText({
      placeholder: 'Поиск...',
      name: 'search',
    });

    this.children.avatarMy = new AvatarChat({
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: true,
    });

    this.children.avatarUser1 = new AvatarChat({
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      active: true,
    });

    this.children.avatarUser2 = new AvatarChat({
      avatar: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      active: false,
    });

    this.children.chatPreviewList = chatPreviewData.map((item) => {
      const chatPreviewItem = new ChatPreview({
        avatar: item.avatar,
        active: item.active,
        username: item.username,
        lastmsg: item.lastmsg,
        time: item.time,
        unread: item.unread,
      });

      return chatPreviewItem;
    });

    this.children.messages = messageData.map((item) => {
      if (item.login === 'myLogin') {
        const message = new MyMessage({
          content: item.content,
          time: item.time,
          isread: item.isread,
          avatar: item.avatar,
          active: item.active,
        });
        return message;
      }
      const message = new Message({
        username: item.username,
        content: item.content,
        time: item.time,
        avatar: item.avatar,
        active: item.active,
      });

      return message;
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
