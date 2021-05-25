import { AInput } from '../../src/AInput/AInput';
import { ELEMENT_ENUM } from '../enums/factories';

import { testComponentWithNoChildren } from './utils/test-component';

describe('Given AInput component is used', () => {
  const AInputProps = {
    factory: {
      ...ELEMENT_ENUM,
    },
  };

  testComponentWithNoChildren(AInput, 'AInput', AInputProps);
});
