import * as React from 'react';

import { ILayoutComponent } from '../types';

interface IAForm extends ILayoutComponent {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export { IAForm };
