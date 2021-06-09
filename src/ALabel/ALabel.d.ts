import { IElementComponent } from '../types';

interface IALabel extends IElementComponent {
  children?: React.ReactNode;
  fontSize?: string;
  value?: string;
}
