import { ANav } from '../../src/ANav/ANav';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ANav component is used', () => {
  const ANavProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(ANav, 'ANav', ANavProps);
});
