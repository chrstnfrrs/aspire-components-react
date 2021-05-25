import { ALabel } from '../../src/ALabel/ALabel';
import { ELEMENT_ENUM } from '../enums/factories';

import { testComponentWithNoChildren } from './utils/test-component';

describe('Given ALabel component is used', () => {
  const ALabelProps = {
    factory: {
      ...ELEMENT_ENUM,
    },
  };

  testComponentWithNoChildren(ALabel, 'ALabel', ALabelProps);
});
