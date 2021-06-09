import { ABtn } from '../../src/ABtn/ABtn';
import { ELEMENT_ENUM, ELEVATION_ENUM } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ABtn component is used', () => {
  const ABtnProps = {
    factory: {
      ...ELEMENT_ENUM,
      elevation: ELEVATION_ENUM,
    },
  };

  testComponent(ABtn, 'ABtn', ABtnProps);
});
