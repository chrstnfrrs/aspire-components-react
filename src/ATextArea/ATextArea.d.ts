import * as React from 'react';

import { IElementComponent } from '../types';

interface IATextArea extends IElementComponent {
  fontSize?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
