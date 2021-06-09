import { IElementComponent } from '../types';

interface IALabel extends IElementComponent {
  children?: React.ReactNode;
  htmlFor?: string;
  fontSize?: string;
  value?: string;
}
