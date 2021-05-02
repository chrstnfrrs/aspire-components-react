import { AForm } from '../../src/AForm/AForm';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given AForm component is used', () => {
  const AFormProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(AForm, 'AForm', AFormProps);
});
