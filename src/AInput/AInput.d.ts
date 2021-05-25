import { IElementComponent, ILayoutComponent } from '../types';

interface ILabel extends IElementComponent {
  fontSize?: string;
  value: string;
}

interface IAInput extends IElementComponent {
  box?: ILayoutComponent;
  fontSize?: string;
  label?: ILabel | string;
  name?: string;
  placeholder?: string;
}
