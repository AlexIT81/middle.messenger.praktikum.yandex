import './popup-upload.css';
import Block from '../../utils/Block';
import template from './popup-upload.hbs';

interface PopupUploadProps {
  placeholder: string,
  name: string,
  error?: string,
  onBlur?: () => void;
  events?: {
    blur: () => void;
  }
}

export default class InputText extends Block {
  constructor(props: PopupUploadProps) {
    super({
      ...props,
      events: { blur: props.onBlur },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
