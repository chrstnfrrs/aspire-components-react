import { ARow } from '../../src/ARow/ARow';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ARow component is used', () => {
  const ARowProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(ARow, 'ARow', ARowProps);
});
