import { ALabel } from '../../src/ALabel/ALabel';
import { ELEMENT_ENUM, FONTSIZE_ENUM } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ALabel component is used', () => {
  const ALabelProps = {
    factory: {
      ...ELEMENT_ENUM,
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(ALabel, 'ALabel', ALabelProps);
});
