import { IElementComponent } from '../types';

interface IABtn extends IElementComponent {
  elevation?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}
