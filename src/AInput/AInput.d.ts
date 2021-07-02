import * as React from 'react';

import { IElementComponent } from '../types';

interface IAInput extends IElementComponent {
  fontSize?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
